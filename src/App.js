import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Aboutus from './Components/Aboutus';
import Home from './Components/games/Home';
import WordGames from './Components/Cards/WordGames';
import Memory from './Components/Cards/Memory';
import GameBoard from './Components/games/GameBoard';
import EduCards from './Components/Cards/EduCards';
import {Route, Routes} from 'react-router-dom';
import McqCards from './Components/Cards/Videos';
import JumbledSentenceGame from './Components/games/JumbledSentenceGame';
import WordSearchGame from './Components/games/WordSearchGame';
import WordJumble from './Components/games/WordJumble';
import ContactUs from './Components/ContactUs';
import Mcq1 from './Components/games/Mcq1';
import Feedback from './Components/Feedback';
import RTEducation  from './Components/games/RTEducation';
import EduMcq from './Components/games/EduMcq';
import RTDevelopment from './Components/games/RTDevelopment';
import DevMcq from './Components/games/DevMcq';
import RTProtection from  './Components/games/RTProtection';
import ProMcq from './Components/games/ProMcq';
import RTDiscrimination from './Components/games/RTDiscrimination';
import DisMcq from './Components/games/DisMcq';
import RTSurvival from './Components/games/RTSurvival';
import SurMcq from './Components/games/SurMcq';
import RTParticipation from './Components/games/RTParticipation';
import ParMcq from './Components/games/ParMcq';
import Video1 from './Components/games/Video1';
import Video2 from './Components/games/Video2';
import Video3 from './Components/games/Video3';
import QuizComponent1 from './Components/games/QuizComponent1';
import QuizComponent2 from './Components/games/QuizComponent2';
import QuizComponent3 from './Components/games/QuizComponent3';


function App() { 
  return (
    <div className="App">      
      <Navbar/>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/WordGames' element={<WordGames/>}/>
        <Route path='/Memory' element={<Memory/>}/>
        <Route path='/GameBoard' element={<GameBoard/>}/>
        <Route path='/EducationCards' element={<EduCards/>}/>
        <Route path='/McqCards' element={<McqCards/>}/>
        <Route path="/Mcq1" element={<Mcq1/>}/>
        <Route path='/JumbledSentenceGame' element={<JumbledSentenceGame/>}/>
        <Route path="/WordSearchGame" element={<WordSearchGame/>}/>
        <Route path="/WordJumble" element={<WordJumble/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
        <Route path="/Feedback" element={<Feedback/>}/>
        <Route path="/Aboutus" element={<Aboutus/>}/>
        <Route path="/RTEducation" element={<RTEducation/>}/>
        <Route path="/RTDevelopment" element={<RTDevelopment/>}/>
        <Route path="/RTProtection" element={<RTProtection/>}/>
        <Route path="/RTDiscrimination" element={<RTDiscrimination/>}/>
        <Route path="/RTSurvival" element={<RTSurvival/>}/>
        <Route path="/RTParticipation" element={<RTParticipation/>}/>
        <Route path="/EduMcq" element={<EduMcq/>}/>
        <Route path="/DevMcq" element={<DevMcq/>}/>
        <Route path="/ProMcq" element={<ProMcq/>}/>
        <Route path="/DisMcq" element={<DisMcq/>}/>
        <Route path="/SurMcq" element={<SurMcq/>}/>
        <Route path="/ParMcq" element={<ParMcq/>}/>
        <Route path="/Video1" element={<Video1/>}/>
        <Route path="/Video2" element={<Video2/>}/>
        <Route path="/Video3" element={<Video3/>}/>
        <Route path="/QuizComponent1" element={<QuizComponent1/>}/>         
        <Route path="/QuizComponent2" element={<QuizComponent2/>}/>
        <Route path="/QuizComponent3" element={<QuizComponent3/>}/>
      </Routes>
    </div>
  );
}

export default App;