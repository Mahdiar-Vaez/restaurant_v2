import React, { useState, useEffect, useRef } from "react";
import "./ai.css";
import { RiRobot2Fill } from "react-icons/ri";
import { motion } from "framer-motion";
const Ai = () => {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [firstRes, setFirstRes] = useState("");
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const messageRef=useRef()
 const messageContainer=messageRef.current
 if(messageContainer){
  messageContainer.scrollTo({ behavior: "smooth" });
}
  const fetchResponse = async () => {
    setLoading(true);
    setError(null);

    try {
      const url = `https://api4dev.ir/ai/?text=${encodeURIComponent(
        question
      )}`;
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.text();
      setResponse(data);

      setChatHistory((prevHistory) => [
        ...prevHistory,
        { question, response: data },
      ]);

      setQuestion("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchInitialResponse = async () => {
    setLoading(true);
    try {
      const url = `https://api4dev.ir/ai/?text=سلام عزیزم خودت رو به عنوان میزبان رستوران مهدیار واعظ معرفی کن و به مهمانان خوش آمد بگو و نظرت رو در مورد مسابقات فرهنگی هنری بیان کن و بگو توسط مهدیار واعظ ساخته شد .و از عوامل این مسابقات که استان خراسان رضوی است به ص.رت مختصر و کوتاه تشکر کن `;
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.text();
      setFirstRes(data);
      setChatHistory([{ question: "خوش آمدگویی", response: data }]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInitialResponse();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchResponse();
    setQuestion("");
  };


  return (
    <motion.div initial={{opacity:0,}} whileInView={{opacity:1}} transition={{duration:.5}} className="chat-container">
      <div className="chat-header">
        <h1>صحبت با هوش مصنوعی</h1>
      </div>
      <div className="chat-body">
        <div className="chat-messages  " ref={messageRef}>
          {chatHistory.map((chat, index) => (
            <div key={index} className="chat-message">
              <p className="me-message">
                 {chat.question}
              </p>
              <div className="ai-message">
            {<p><RiRobot2Fill fontSize={32} /></p>}   <p> {chat.response}</p>
              </div>
            </div>
          ))}
          {loading && <p>چند لحطه صبر کنید...</p>}
          {error && <p className="error-message">{error}</p>}
        </div>
        <form onSubmit={handleSubmit} className="chat-form">
        <button type="submit" className="chat-submit-btn">
            بپرس
          </button>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="سوال خود را بپرسید"
            className="chat-input"
          />
      
        </form>
      </div>
    </motion.div>
  );
};

export default Ai;