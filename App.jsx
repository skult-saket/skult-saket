function Profile(){
    return(
        // <h1> My first component </h1>
        <img src = "https://previews.123rf.com/images/ninass79/ninass792104/ninass79210400005/168586951-indian-god-ganesha-indian-lord-ganesh-indian-mythological-image-of-ganesha.jpg"
        />
    );
}

export default function Gallery(){
    return(
        <div>
            <h1>Lord Ganesh</h1>
            <Profile/>
            <Profile/>
            <Profile/>
        </div>
    );
}