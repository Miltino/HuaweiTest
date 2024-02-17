// Definisikan configurasi Database
const config = require('../configs/database');
// Gunakan library mysql
let mysql      = require('mysql');
// Buat koneksi
let pool       = mysql.createPool(config);

// Kirim error jika koneksi gagal
pool.on('error',(err)=> {
    console.error(err);
});

module.exports ={
    // Fungsi untuk merender file register yang ada pada folder 'src/views/register.ejs'
    formRegister(req,res){
        res.render("mainpage",{
            // Definisikan semua varibel yang ingin ikut dirender kedalam register.ejs
            url : 'http://localhost:5050/',
        });
    },
    // Fungsi untuk menyimpan data
    saveRegister(req,res){
        // Tampung inputan user kedalam varibel username, email dan password
        let username = req.body.username;
        let email = req.body.email;
        let password = req.body.pass;
        let phone = req.body.phone;
        // Pastikan semua varibel terisi
        if (username && email && password && phone) {
            // Panggil koneksi dan eksekusi query
            pool.getConnection(function(err, connection) {
                if (err) throw err;
                connection.query(
                    `SELECT COUNT(*) AS count FROM db_node_login WHERE user_email = ? OR user_name = ?`,
                    [email, username],
                    function(error, results) {
                        if (error) throw error;

                        if (results[0].count > 0) {
                            req.flash('color', 'danger');
                            req.flash('status', 'No..');
                            req.flash('message', 'Email atau Username sudah terdaftar');
                            res.redirect('/login');
                        } else {
                            connection.query(
                                `INSERT INTO db_node_login (user_name, user_email, user_password, user_phone) VALUES (?, ?, SHA2(?,512), ?);`,
                                [username, email, password, phone],
                                function(error, results) {
                                    if (error) throw error;
                                    req.flash('color', 'success');
                                    req.flash('status', 'Yes..');
                                    req.flash('message', 'Registrasi Berhasil');
                                    res.redirect('/login');
                                }
                            );
                        }
                    }
                )
                connection.release();
            });
        } else {
            // Kondisi apabila variabel username, email dan password tidak terisi
            res.redirect('/login');
            res.end();
        }
    }
}