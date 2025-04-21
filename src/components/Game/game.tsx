import { useState, useEffect } from "react"
import { Container } from "./gameCSS"

const businessIdeas = [
  "A smoothie truck",
  "A custom sneaker brand",
  "A handmade jewelry store",
  "A food truck selling global street food",
]
const problems = [
  "Your biggest competitor just launched a new product. What do you do?",
  "A customer leaves a negative review online. How do you respond?",
  "Your supplier increases their prices by 30%. How do you adjust?",
  "Customers love your product, but no one is buying it. What’s the problem?",
]
const challenges = [
  "Give a 20-second elevator pitch for your brand.",
  "Come up with a funny slogan for your business.",
  "Pitch your product in a funny voice!",
  "Create a jingle (song tagline) for your business.",
]

function Game() {
  const [randomIndexes, setRandomIndexes]: any = useState({})

  const setNewRandomIndex = () => {
    setRandomIndexes({
      businessIdeaIndex: Math.floor(Math.random() * businessIdeas.length),
      problemsIndex: Math.floor(Math.random() * businessIdeas.length),
      challengesIndex: Math.floor(Math.random() * businessIdeas.length),
    })
  }

  useEffect(setNewRandomIndex, [])

  return (
    <Container>
      <button onClick={setNewRandomIndex}>GENERATE NEW ONE</button>
      <div>
        <img className="info" src="/assets/BusinessIdeaCard.png" />
        <div>
          <p>{businessIdeas[randomIndexes.businessIdeaIndex]}</p>
        </div>
      </div>
      <div>
        <img className="info" src="/assets/ChallengeCard.png" />
        <div>
          <p>{problems[randomIndexes.problemsIndex]}</p>
        </div>
      </div>
      <div>
        <img className="info" src="/assets/ProblemCard.png" />
        <div>
          <p>{challenges[randomIndexes.challengesIndex]}</p>
        </div>
      </div>
    </Container>
  )
}

export default Game
