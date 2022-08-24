

export const PageTemplate = (props) =>{
    return(
        <div>
            <h1 className="titulo">{props.titulo}</h1>
            <h2 className="subtitulo">{props.subtitulo}</h2>
            {props.children}
        </div>
    )
}