const _ = require("underscore")._;
const db = require("./db").default;
const pexels = require('pexels');
const http = require('http');
const fs = require('fs');

require('dotenv').config()

const client = pexels.createClient(process.env.api_key);

(async () => {
  for (var i = 1; i <= 100; i++) {
    let response = await new Promise((resolve, reject) => {
      client.videos.search({ query: 'Animals', page: i, per_page: 10 }).then(result => resolve(result)).catch(error => reject(error));
    })
    if (response.videos != undefined) {
      response.videos.forEach(video => {
        var video_file = _.max(_.filter(video.video_files, video_file => video_file.quality == 'sd'), sd_file => sd_file.width);
        var safe_link = video_file.link.split('?')[0];
        var filename = _.last(video_file.file_type.split('/'));
  
        const filestream = fs.createWriteStream("../shared/videos/" + filename);
        const request = http.get(video_file.link, res => {
          res.pipe(filestream);
        });

        db.insert.author(video.user.id, video.user.name, video.user.url);
        db.insert.video(video.id, video_file.id, video.user.id, video_file.width, video_file.height, video.duration, video.url, safe_link, filename, video_file.file_type);
      });
    } else {
      console.log(response);
      continue;
    }
  }
})();