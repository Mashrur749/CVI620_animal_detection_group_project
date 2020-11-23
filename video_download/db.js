const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../shared/live.sqlite3');

exports.default = {
  insert: {
    author: (id, name, url) => {
      var stmt = db.prepare("INSERT OR IGNORE INTO authors(id,name,url) VALUES(?,?,?)");
      stmt.run([id, name, url]);
      stmt.finalize();
    },
    video: (id,file_id,author_id,width,height,duration,pexel_url,source_url,filename,file_type) => {
      var stmt = db.prepare("INSERT OR IGNORE INTO videos(id,file_id,author_id,width,height,duration,pexel_url,source_url,filename,file_type) VALUES(?,?,?,?,?,?,?,?,?,?)");
      stmt.run([id,file_id,author_id,width,height,duration,pexel_url,source_url,filename,file_type]);
      stmt.finalize();
    }
  }
}