import './CartaoAluno.css'

function CartaoAluno(props) {
  return (
    <div className="cartao-aluno">
      <h2>{props.nome}</h2>
      <p>Matrícula: {props.matricula}</p>
    </div>
  )
}

export default CartaoAluno