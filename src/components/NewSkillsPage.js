import React from "react";

const NewSkillsPage = () => {
  const skills = [
    { name: "HTML", level: 90, category: "Frontend" },
    { name: "CSS", level: 85, category: "Frontend" },
    { name: "JavaScript", level: 80, category: "Frontend" },
    { name: "React", level: 75, category: "Frontend" },
    { name: "Node.js", level: 70, category: "Backend" },
    { name: "Express", level: 65, category: "Backend" },
    { name: "MongoDB", level: 60, category: "Backend" },
  ];

  return (
    <div style={{ 
      padding: "30px", 
      maxWidth: "1200px", 
      margin: "0 auto",
      border: "5px solid red" // Viền đỏ để dễ nhận biết
    }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>My Skills</h1>
      
      <div>
        {["Frontend", "Backend"].map(category => (
          <div key={category} style={{ marginBottom: "40px" }}>
            <h2 style={{ borderBottom: "2px solid #ddd", paddingBottom: "10px" }}>{category}</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
              {skills
                .filter(skill => skill.category === category)
                .map(skill => (
                  <div key={skill.name} style={{ 
                    flex: "1 0 200px",
                    backgroundColor: "#f5f5f5",
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
                  }}>
                    <h3>{skill.name}</h3>
                    <div style={{ 
                      height: "10px", 
                      backgroundColor: "#ddd",
                      borderRadius: "5px",
                      overflow: "hidden",
                      marginBottom: "5px"
                    }}>
                      <div style={{ 
                        width: `${skill.level}%`, 
                        height: "100%", 
                        backgroundColor: "#4caf50" 
                      }} />
                    </div>
                    <p style={{ textAlign: "right", margin: "0" }}>{skill.level}%</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewSkillsPage; 