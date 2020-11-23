const client = require("./database");

exports.promos = (callback) => {
  client.query(`SELECT * FROM "promo"`, (err, data) => {
    if (err) {
      console.trace(err);
      callback();
    } else callback(data.rows);
  });
};

exports.promo = (id, callback) => {
  client.query(`SELECT * FROM "promo" WHERE "id" = $1`, [id], (err, data) => {
    if (err) {
      console.trace(err);
      callback();
    } else callback(data.rows[0]);
  });
};

exports.promoStudents = (id, callback) => {
  client.query(`SELECT * FROM "promo" WHERE "id" = $1`, [id], (err, promo) => {
    if (err) {
      console.trace(err);
      callback();
    } else {
      client.query(
        `SELECT * FROM "student" WHERE "promo_id" = $1`,
        [promo.rows[0].id],
        (err, students) => {
          if (err) {
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
      if (err) {
        console.trace(err);
        callback();
      } else {
        client.query(
          `SELECT * FROM "promo" WHERE id = $1`,
          [student.rows[0].promo_id],
          (err, data) => {
            if (err) {
              console.trace(err);
              callback();
            } else callback(student.rows[0], data.rows[0]);
          }
        );
      }
    }
  );
};
