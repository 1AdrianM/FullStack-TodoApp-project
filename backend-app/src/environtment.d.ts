declare global {
    namespace NodeJS{
 
        interface ProcessEnv {
    PORT?:string;
    NODE_ENV: 'Development'|'Production'
    SECRET_ACCESS_TOKEN?:string
    SECRET_REFRESH_TOKEN?:string

}
    }
}
export {}