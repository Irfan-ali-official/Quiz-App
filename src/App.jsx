import React, { useEffect, useMemo, useState } from "react";
import "./app.css"
import Start from "./components/Start";
import Timer from "./components/Timer";
import { Trivia } from "./components/Trivia";
const App = () => {
  const [questionNumber,setQuestionNumber] = useState(1)
  const [username,setUsername]= useState(null)
  const [earned,setEarned]= useState("$ 0")
  const [stop,setStop]= useState(false)
  const data = [
    {id:1,
      question:"The International Literacy Day is observed on?",
      answers:[
        {text:"Sep 8",
      correct:true,},
      {text:"Nov 28",
    correct:false,},
    {text:"May 2",
    correct:false,},
    {text:"Sep 22",
    correct:false,},
      ]},
    {id:2,
    question:"Rolex is a company that specializes in what type of product?",
    answers:[
      {text:"Phone",
    correct:false,},
    {text:"Food",
  correct:false,},
  {text:"Watches",
  correct:true,},
  {text:"Cosmetic",
  correct:false,},
    ]},
    {id:3,
      question:"Which cricket team has won more world cups??",
      answers:[
        {text:"Australia",
      correct:true,},
      {text:"India",
    correct:false,},
    {text:"Pakistan",
    correct:false,},
    {text:"England",
    correct:false,},
      ]},
      {id:4,
        question:"Virat Kohli is a player of which cricket team?",
        answers:[
          {text:"Pakistan",
        correct:false,},
        {text:"Bangladesh",
      correct:false,},
      {text:"New Zealand",
      correct:false,},
      {text:"India",
      correct:true,},
        ]},
        {id:5,
          question:"Which country has most expensive currency?",
          answers:[
            {text:"United Kingdom",
          correct:false,},
          {text:"China",
        correct:false,},
        {text:"Quwait",
        correct:true,},
        {text:"America",
        correct:false,},
          ]},
          {id:6,
            question:"What is the capital of Russia?",
            answers:[
              {text:"Dhaka",
            correct:false,},
            {text:"Moscow",
          correct:true,},
          {text:"Beijing",
          correct:false,},
          {text:"Harare",
          correct:false,},
            ]},
            {id:7,
              question:"What is the currency of Bangladesh?",
              answers:[
                {text:"Rupee",
              correct:false,},
              {text:"Dollar",
            correct:false,},
            {text:"Takka",
            correct:true,},
            {text:"Pound",
            correct:false,},
              ]},
              {id:8,
                question:" Which day is observed as the World Standards  Day?",
                answers:[
                  {text:"June 26",
                correct:false,},
                {text:"Oct 14",
              correct:true,},
              {text:"Nov 15",
              correct:false,},
              {text:"Dec 2",
              correct:false,},
                ]},
                {id:9,
                  question:'Who is the author of the epic Meghdoot"?',
                  answers:[
                    {text:"Vishakadatta",
                  correct:false,},
                  {text:"Valmiki",
                correct:false,},
                {text:"Banabhatta",
                correct:false,},
                {text:"Kalidas",
                correct:true,},
                  ]},
                  {id:10,
                    question:" Who is the author of the book 'Amrit Ki Ore'?",
                    answers:[
                      {text:"Mukesh Kumar",
                    correct:false,},
                    {text:"Narendra Mohan",
                  correct:true,},
                  {text:"Upendra Nath",
                  correct:false,},
                  {text:"Nirad C. Choudhary",
                  correct:false,},
                    ]},
              
  ]
  const moneyPyramid  =useMemo(()=>
    [
      {id:1, amount:"$ 100"},
      {id:2, amount:"$ 1000"},
      {id:3, amount:"$ 2000"},
      {id:4, amount:"$ 4000"},
      {id:5, amount:"$ 50000"},
      {id:6, amount:"$ 600000"},
      {id:7, amount:"$ 7000000"},
      {id:8, amount:"$ 80000000"},
      {id:9, amount:"$ 90000000"},
      {id:10, amount:"$ 100000000"},
      {id:11, amount:"$ 1100000000"},
      {id:12, amount:"$ 15000000000"},
      {id:13, amount:"$ 20000000000"},
      {id:14, amount:"$ 40000000000"},
      {id:15, amount:"$ 50000000000"}
    ].reverse()
  ,[]) 
  useEffect(()=>{
      questionNumber >1 && setEarned(moneyPyramid.find(m=>m.id===questionNumber-1).amount)
  },[moneyPyramid,questionNumber])
  return(
   <div className="app">
    {username ? (
      <>
       <div className="main">
      {stop ? <h1 className="endText">You earned: {earned}</h1>: (
        <>
        <div className="top">
        <div className="timer">
          <Timer setStop={setStop} questionNumber={questionNumber}/>
        </div>
      </div>
      <div className="bottom">
        <Trivia 
        data={data} 
        setStop={setStop}
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}/>
      </div></>
      )}
      
    </div>
    <div className="pyramid">
      <ul className="moneyList">
        {moneyPyramid.map((m)=>(
          <li className={questionNumber===m.id?"moneyListItem active":"moneylistItem"}>
          <span className="moneyListItemNumber">{m.id}</span>
          <span className="moneyListItemAmount">{m.amount}</span>
        </li>
        ))}
        
      </ul>
    </div></>
    ): <Start setUsername={setUsername}/>}
  </div>
  );
}

export default App;
