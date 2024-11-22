
import { useLoaderData } from 'react-router-dom';

const River = () => {
    const datas=useLoaderData();
    const riverData=datas.filter(data=> data.categoryName==="River Adventures");
    return (
        <div className='border-2 mb-5 rounded p-16'>
            {
                riverData.map((river,ind)=> <div key={ind}>
                    
                    <h1 className='text-3xl font-bold'>{river.adventureTitle}</h1>
                    <p className='text-lg text-gray-500'>{river.shortDescription}</p>
                    
                    <ul>
                        <h1 className='text-xl underline'>Special Instruction You Must Know</h1>
  {river.specialInstructions.map((instruction, ind) => {
    // Check if the instruction has a 'gear' array and map over it
    if (instruction.gear) {
      return instruction.gear.map((gearItem, gearInd) => (
        <li key={`${ind}-${gearInd}`}>{gearInd+1}{gearItem}</li>
      ));
    }
    // Check if the instruction has a 'health' array and map over it
    if (instruction.health) {
      return instruction.health.map((healthItem, healthInd) => (
        <li key={`${ind}-${healthInd}`}>{healthInd+3}.{healthItem}</li>
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