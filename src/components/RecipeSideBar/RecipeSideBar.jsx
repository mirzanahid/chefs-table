import PropTypes from "prop-types";

const RecipeSideBar = ({
  wantCook,
  handleForPreparing,
  preparing,
  time,
  calories,
}) => {
  return (
    <div className="w-1/3 border border-[rgb(40,40,40,20%)] rounded-2xl py-8 ">
      <div className="w-full">
        <div className="px-[50px]">
          <h4 className="font-semibold text-2xl text-[#282828]  border-b border-[rgba(40,40,40,15%)] text-center pb-4">
            Want to cook: {wantCook.length}
          </h4>
        </div>

        <table className="table-auto py-6 mt-4  w-full">
          <thead>
            <tr className="">
              <th className="font-medium text-base text-[#878787] px-4 "></th>
              <th className="font-medium text-base text-[#878787] pr-4 ">
                Name
              </th>
              <th className="font-medium text-base text-[#878787] pr-4 ">
                Time
              </th>
              <th className="font-medium text-base text-[#878787] pr-4 ">
                Calories
              </th>
            </tr>
          </thead>
          <tbody className="bg-[rgba(40,40,40,3%)] py-3">
            {wantCook.map((cook, idx) => (
              <tr key={idx} className="h-20">
                <td className="px-5">{idx + 1}</td>
                <td className="font-normal text-base text-[rgba(40,40,40,70%)] w-[150px] pr-4 ">
                  {cook.recipe_name}
                </td>
                <td className="font-normal text-base text-[rgba(40,40,40,70%)] pr-4  w-[70px]">
                  {cook.preparing_time} minutes
                </td>
                <td className="font-normal text-base text-[rgba(40,40,40,70%)] w-[70px] pr-4 ">
                  {cook.calories} calories
                </td>
                <td
                  onClick={() => handleForPreparing(cook)}
                  className="font-medium text-[12px] text-[#150B2B] bg-[#0BE58A] rounded-[50px] py-[14px] px-[18px] mt-5 mr-2 cursor-pointer inline-block"
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

        <table className="table-fixed py-6 mt-4 w-full">
          <thead>
            <tr>
              <th className="font-medium text-base text-[#878787] w-[60px] "></th>
              <th className="font-medium text-base text-[#878787] pr-4 ">
                Name
              </th>
              <th className="font-medium text-base text-[#878787] pr-4 ">
                Time
              </th>
              <th className="font-medium text-base text-[#878787] pr-4 ">
                Calories
              </th>
            </tr>
          </thead>
          <tbody className="bg-[rgba(40,40,40,3%)] ">
            {preparing.map((prepare, idx) => (
              <tr key={idx} className=" h-20">
                <td className="px-5">{idx + 1}</td>
                <td className="font-normal text-base text-[rgba(40,40,40,70%)] w-[150px] pr-4 ">
                  {prepare.recipe_name}
                </td>
                <td className="font-normal text-base text-[rgba(40,40,40,70%)] pr-4  w-[70px]">
                  {prepare.preparing_time} minutes
                </td>
                <td className="font-normal text-base text-[rgba(40,40,40,70%)] w-[70px] pr-4 ">
                  {prepare.calories} calories
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end items-center mt-8 px-5">
          <p className="w-[107px] font-medium text-base text-[rgba(40,40,40,80%)] mr-5">Total Time = {time} minutes</p>
          <p className="w-[122px] font-medium text-base text-[rgba(40,40,40,80%)]">Total Calories = {calories} calories</p>
        </div>
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
