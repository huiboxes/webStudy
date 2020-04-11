module.exports = async (res, get, post, files) => {
    let { title, price, count } = post
    if (!title || !price || !count) {
        res.writeJson({ error: 1, msg: 'params invaild' })
    } else {
        price = Number(price)
        count = Number(count)

        if (isNaN(price) || isNaN(count)) {
            res.writeJson({ error: 1, msg: 'params invaild' })
        } else {
            try {
                // db.query(`insert into item_table (title,price,count) values(${title},${price},${count})`)
                await db.query(`insert into item_table (title,price,count) value(?,?,?)`, [title, price, count])
                res.writeJson({ error: 0, msg: 'success' })
            } catch (e) {
                res.writeJson({ error: 1, msg: 'database error' })
            }
        }
        res.end()
    }
}