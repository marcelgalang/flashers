const FlashcardPage = ({flashcard}) => {
  let isClicked = false
  let sides = isClicked ? (
    <h1>{flashcard.a_side}</h1>) :
  (<h1>{flashcard.b_side}</h1>)
  const onFlip = () => {
    var x = document.getElementById("answer");
    x.style.display === "none" ? x.style.display = "block" : x.style.display = "none"
  }
  return (

    <div>

      <h1 onClick={onFlip} >{flashcard.a_side}</h1>
      <h1 id='answer' display="none">{flashcard.b_side}</h1>


    </div>

    )
}