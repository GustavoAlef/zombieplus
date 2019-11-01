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

    }
}