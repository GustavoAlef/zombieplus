//pg - biblioteca node de acesso ao postgresql
import {Pool} from 'pg'

//const nomestring = protocolo://usuarioDeAcessoaoBanco:senhaDoUsuario@servidordoBanco:porta/bancoDesejado
const connectString = 'postgresql://postgres:qaninja@pgdb:5432/zombieplus'

//instancia do banco
const pool = new Pool({connectionString: connectString})

export default {
    removeByTitle: (title) => {
        return new Promise((resolve, reject) => {
            pool
            .query(`DELETE FROM public.movies where title = '${title}';`)
            .then(resp => {
                resolve(resp)
            })
            .catch(erro => reject(erro.stack))
        })

    },

    insertMovie: (movie) => {
        let query = `INSERT INTO public.movies(
            title, status, year, release_date, "cast", overview, cover, created_at, updated_at)
            VALUES ('${movie.title}', '${movie.status}', '${movie.year}', '${movie.releaseDate}', '{${movie.cast}}', '${movie.plot}', '${movie.cover}', current_timestamp, current_timestamp);`

            // console.log(query)

            return new Promise((resolve, reject) => {
                pool
                .query(query)
                .then(resp => {
                    resolve(resp)
                })
                .catch(erro => reject(erro.stack))
            })
    }
}