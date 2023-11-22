import React, { useState } from "react";
import Question from "./Question";
import quizData from "./data";

function Home() {
    const[questions,setQuestions] = useState(quizData)
  return (
    <main>
      <div className="container">
        <h2>Quiz App</h2>
        <section className="info">
            {
                questions.map((question)=>{
                  console.log(question);
                    return(
                     
                        <Question key={question.id}{...question} />
                    )
                    
                })
                
            }
        </section>
      </div>
    </main>
  );
}

export default Home;
