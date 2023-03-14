import { useEffect, useState } from "react"
import useSound from "use-sound"
import play from "../assets/play.wav"
import correct from "../assets/correct.mp3"
import wrong from "../assets/wrong.mp3"

export const Trivia = ({data,setStop,questionNumber,setQuestionNumber}) => {
    
    const [question,setQuestion]= useState(null);
    const [selectedAnswer,setSelecetedAnswer]= useState(null)
    const [className,setClassName]= useState("answer")
    const [letsPlay] = useSound(play)
    const [correctAnswer] = useSound(correct)
    const [wrongAnswer] = useSound(wrong)
    useEffect(()=>{
      letsPlay(); 
    },[letsPlay])

    useEffect(()=>{
     setQuestion(data[questionNumber-1])
    },[data,questionNumber])
    const delay = (duration,callback)=>{
      setTimeout(()=>{
        callback();
      },duration)
    }
    const handleClick= (a)=>{
       setSelecetedAnswer(a)
       setClassName("answer active")
       delay(3000,()=>setClassName(a.correct ? "answer correct" :" answer wrong"))
       delay(6000,()=>
       {
        if(a.correct){
            //letsPlay(false)
            correctAnswer();
            setQuestionNumber(prev=> prev+1)
            setSelecetedAnswer(null)
        }
        else{
           
            wrongAnswer()
            setStop(true)}
       })
    }
  return (
    <div className="trivia">
        <div className="question">{question?.question}</div>
        <div className="answers">
            {question?.answers.map((a)=>(
                <div className={selectedAnswer===a?className:"answer"} onClick={()=>handleClick(a)}>{a.text}</div>
            ))}
        </div>
    </div>
  )
}
