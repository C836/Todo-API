export default function success(id){
    const token = jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET);
    return ({ auth: true, token: token });
}