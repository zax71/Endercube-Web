import StaffMember from '../components/StaffMember';
import '../index.css';

function Staff() {
  return (
    <div className='pb-10'>
      
      <div className='mr-auto ml-auto w-[80%] mt-3'> {/*Centered container - everything in here*/}

        <div className='text-gray-0 font-openSans pb-2 mb-6 border-b-4 border-b-gray-0'> {/*Staff info*/}
          <h2 className='font-oswald text-2xl'>Our Staff</h2>
          <p className='text-left text-lg font-inter'>At Endercube we have a team of experienced staff members that excel in their field to keep you safe and develop new server features</p>
        </div>

        <div className='grid grid-cols-2 gap-3'> {/*Staff members container*/}
          <div className='text-gray-0 font-openSans'> {/*Zax71 container*/}
            <StaffMember github="https://github.com/zax71" email="zax71@endercube.net" name="Zax71" discord="Zax71#1557" bio={"HI! I'm Zax71, I do most of the development work here. Including this website! I'm also a hobby programmer with Java, Web development and CircutPython under my belt."}/>
          </div>

          <div></div><div></div> {/*Spacer*/}

          <div className='text-gray-0 font-openSans'> {/*Rambino_PorkChop container*/}
            <StaffMember email="Rambino_Porkchop@endercube.net" name="Rambino_PorkChop" discord="Rambino_PorkChop#2076" bio={"hej hej\nI'm Rambino_PorkChop [she/her] (But you can call me Rambi if you want)\nI make pixel art\ni also love JRPG's stuff like earthbound deltarune etc.\nHave a good day #^^'#"}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staff;
