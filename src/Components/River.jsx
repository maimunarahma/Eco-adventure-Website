
import { useLoaderData } from 'react-router-dom';

const River = () => {
    const datas=useLoaderData();
    const riverData=datas.filter(data=> data.categoryName==="River Adventures");
    return (
        <div>
            {
                riverData.map((river,ind)=> <div key={ind}>
                    
                    <h1>{river.adventureTitle}</h1>
                    <p>{river.shortDescription}</p>
                    
                    <ul>
  {river.specialInstructions.map((instruction, ind) => {
    // Check if the instruction has a 'gear' array and map over it
    if (instruction.gear) {
      return instruction.gear.map((gearItem, gearInd) => (
        <li key={`${ind}-${gearInd}`}>{gearItem}</li>
      ));
    }
    // Check if the instruction has a 'health' array and map over it
    if (instruction.health) {
      return instruction.health.map((healthItem, healthInd) => (
        <li key={`${ind}-${healthInd}`}>{healthItem}</li>
      ));
    }
    return null; // Return null if neither 'gear' nor 'health' is found
  })}
</ul>
                    
                    </div>)
            }
        </div>
    );
};

export default River;