import React from "react";

let fixed = {
  color:"whitesmoke",
  minHeight: "85vh",
};
let none = {
  listStyle: "none",
  fontSize: "30px",
  marginTop: "10px",
};
let border = {
  border: "solid 5px #345B63",

  backgroundImage:
   "radial-gradient(circle, #9da9f1, #8e9beb, #808de4, #717fde, #6271d7, #5968d1, #4f5eca, #4555c4, #3e4dbd, #3646b6, #2e3eaf, #2637a8)",
   
};


export const About = () => {
  return (
    <div style={fixed}>
      <div style={border}>
        <p className="text-center">
          <h2>We are Furry Friends Animal NGO </h2> <br />{" "}
          
          <h6 >
            <ol style={none} color="white">
              <li>
              Animal welfare refers to the quality of life experienced by an animal
              and encompasses how well the animal is coping with his or her current
              situation and surroundings. 
              </li>
              <br/>
              <li>
              World Animal Protection believes animal welfare is affected by the 
              relationships human beings have with animals and it is our duty to 
              ensure all animals are treated humanely, responsibly, and with respect.  
              </li>
              <br/>
              <li>
              This includes consideration for all aspects of animal well-being, 
              such as the Five Domains. Animal welfare should be at the forefront of 
              every human action involving animals. 
              </li>
            </ol>
            <br/>
            <br/>
          </h6>
          <h3 >
            <ol>
            <li>Nutrition – factors that involve the animal’s access to sufficient,
            balanced, varied, and clean food and water. </li>
            <li>Environment – factors that enable comfort through temperature,
               substrate, space, air, odour, noise, and predictability. </li>
            <li>Health – factors that enable good health through the absence of
               disease, injury, impairment with a good fitness level.</li>
            <li>Behaviour – factors that provide varied, novel, and engaging
               environmental challenges through sensory inputs, exploration, 
               foraging, bonding, playing, retreating, and others. </li>
            <li>Mental State – by presenting positive situations in the previous
               four functional domains, the mental state of the animal should benefit
                from predominantly positive states, such as pleasure, comfort, or vitality
                 while reducing negative states such as fear, frustration, hunger, pain, or boredom. </li>
            </ol>
            <br/>
          </h3>
          
          <h3><left>World Animal Protection has a multi-pronged approach to improving the lives of animals.
             Our programs include protecting animals in the wild and creating a better quality of life
              for animals in farming. 

          Around the world, we work with corporations to implement robust animal welfare policies ending
           the use of wild animals for entertainment and the exotic pet trade. We also encourage people to
            reduce the amount of cruelly produced factory-farmed meat they eat and work with meat suppliers
             to implement higher animal welfare practices, eliminating some of the worst cruelties farmed 
             animals face today.</left></h3><br/>
          <a href="https://www.linkedin.com/in/japjikalra/"></a>
          <a href="https://github.com/JapjiKalra"></a>
        </p>
      </div>
    </div>
  );
};
