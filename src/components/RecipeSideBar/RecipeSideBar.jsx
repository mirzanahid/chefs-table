import PropTypes from "prop-types";

const RecipeSideBar = ({ wantCook, handleForPreparing, preparing,time,calories }) => {
  return (
    <div className="w-1/3 border border-[rgb(40,40,40,20%)] rounded-2xl py-8">
      <div className="w-full">
        <div className="px-[50px]">
          <h4 className="font-semibold text-2xl text-[#282828]  border-b border-[rgba(40,40,40,15%)] text-center pb-4">
            Want to cook: {wantCook.length}
          </h4>
        </div>

        <table className="table-auto py-6 ">
          <thead>
            <tr>
              <th className="font-medium text-base text-[#878787]">Name</th>
              <th className="font-medium text-base text-[#878787]">Time</th>
              <th className="font-medium text-base text-[#878787]">Calories</th>
            </tr>
          </thead>
          <tbody className="bg-[rgba(40,40,40,3%)] ">
            {wantCook.map((cook, idx) => (
              <tr key={idx} className=" ">
                <td className="font-normal text-base text-[rgba(40,40,40,70%)] ">
                  {cook.recipe_name}
                </td>
                <td className="font-normal text-base text-[rgba(40,40,40,70%)] ">
                  {cook.preparing_time}
                </td>
                <td className="font-normal text-base text-[rgba(40,40,40,70%)] ">
                  {cook.calories}
                </td>
                <td
                  onClick={() => handleForPreparing(cook)}
                  className="font-medium text-base text-[#150B2B] bg-[#0BE58A] rounded-[50px] py-2 px-4 cursor-pointer"
                >
                  Preparing
                </td>
              </tr>
            ))}
          </tbody>
      
        </table>
      </div>

      <div className="mt-8">
        <div className="px-[50px]">
          <h4 className="font-semibold text-2xl text-[#282828]  border-b border-[rgba(40,40,40,15%)] text-center pb-4">
            Currently cooking: {preparing.length}
          </h4>
        </div>

        <table className="table-fixed py-6">
          <thead>
            <tr>
              <th className="font-medium text-base text-[#878787]">Name</th>
              <th className="font-medium text-base text-[#878787]">Time</th>
              <th className="font-medium text-base text-[#878787]">Calories</th>
            </tr>
          </thead>
          <tbody className="bg-[rgba(40,40,40,3%)] ">
            {preparing.map((prepare, idx) => (
              <tr key={idx} className=" ">
                <td className="font-normal text-base text-[rgba(40,40,40,70%)] ">
                  {prepare.recipe_name}
                </td>
                <td className="font-normal text-base text-[rgba(40,40,40,70%)] ">
                  {prepare.preparing_time}
                </td>
                <td className="font-normal text-base text-[rgba(40,40,40,70%)] ">
                  {prepare.calories}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h4>total time: {time} minutes</h4>
        <h4>total calories: {calories} calories</h4>
      </div>
    </div>
  );
};

RecipeSideBar.propTypes = {
  wantCook: PropTypes.array,
  handleForPreparing: PropTypes.func,
  preparing: PropTypes.array,
  time: PropTypes.number,
  calories: PropTypes.number,
};

export default RecipeSideBar;
