export function todoValidate(body){
    if(!(Date.parse(body.prazo))) return false
    if(parseInt(body.status) > 1) return false

    return true
}