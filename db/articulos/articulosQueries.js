import config from '../../config.js';

const respuesta = (err, result, resolve, reject) => {
    if (err) reject(err);
    else resolve(result);
};

const queryAll = () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM articulos';
        config.query(sql, (err, results) => {
            respuesta(err, results, resolve, reject);
        });
    });
};

const queryFind = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM articulos WHERE id = ?';
        config.query(sql, [id], (err, result) => {
            respuesta(err, result, resolve, reject);
        });
    });
};

const queryCreate = (articulo) => {
    const { titulo, contenido, fecha, autor } = articulo;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO articulos (titulo, contenido, fecha, autor) VALUES (?, ?, ?, ?)';
        config.query(sql, [titulo, contenido, fecha, autor], (err, result) => {
            respuesta(err, result, resolve, reject);
        });
    });
};

const queryUpdate = (id, articulo) => {
    const { titulo, contenido, fecha, autor } = articulo;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE articulos SET titulo = ?, contenido = ?, fecha = ?, autor = ? WHERE id = ?';
        config.query(sql, [titulo, contenido, fecha, autor, id], (err, result) => {
            respuesta(err, result, resolve, reject);
        });
    });
};

const queryDelete = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM articulos WHERE id = ?';
        config.query(sql, [id], (err, result) => {
            respuesta(err, result, resolve, reject);
        });
    });
};

export {
    queryAll,
    queryFind,
    queryCreate,
    queryUpdate,
    queryDelete
}
