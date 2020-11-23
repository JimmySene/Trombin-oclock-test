const client = require("./database");

exports.promos = (callback) => {
  client.query(`SELECT * FROM "promo"`, (err, data) => {
    if (err || data.rows.length === 0) {
      console.trace(err);
      callback();
    } else callback(data.rows);
  });
};

exports.promo = (id, callback) => {
  client.query(`SELECT * FROM "promo" WHERE "id" = $1`, [id], (err, data) => {
    if (err || data.rows.length === 0) {
      console.trace(err);
      callback();
    } else callback(data.rows[0]);
  });
};

exports.promoStudents = (id, callback) => {
  client.query(`SELECT * FROM "promo" WHERE "id" = $1`, [id], (err, promo) => {
    if (err || promo.rows.length === 0) {
      console.trace(err);
      callback();
    } else {
      client.query(
        `SELECT * FROM "student" WHERE "promo_id" = $1`,
        [promo.rows[0].id],
        (err, students) => {
          if (err || students.rows.length === 0) {
            console.trace(err);
            callback();
          } else callback(promo.rows[0], students.rows);
        }
      );
    }
  });
};

exports.student = (id, callback) => {
  client.query(
    `SELECT * FROM "student" WHERE "id" = $1`,
    [id],
    (err, student) => {
      if (err || student.rows.length === 0) {
        console.trace(err);
        callback();
      } else {
        client.query(
          `SELECT * FROM "promo" WHERE id = $1`,
          [student.rows[0].promo_id],
          (err, data) => {
            if (err || data.rows.length === 0) {
              console.trace(err);
              callback();
            } else callback(student.rows[0], data.rows[0]);
          }
        );
      }
    }
  );
};

exports.addStudent = (student, callback) => {
  client.query(
    `INSERT INTO "student" ("first_name", "last_name", "github_username", "profile_picture_url", "promo_id") VALUES($1,$2,$3,$4,$5)`,
    [
      student.first_name,
      student.last_name,
      student.github_username,
      `https://github.com/${student.github_username}.png`,
      student.promo,
    ],
    (err, data) => {
      if (err) {
        console.log(err);
        callback();
      } else {
        callback(student.promo);
      }
    }
  );
};
