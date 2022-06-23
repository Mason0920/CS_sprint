import { Link } from "react-router-dom";

export default function Toolbar({ id, handleDelete = id => e => { console.log(id) } }) {
  return <div className="flex md:float-right mt-1 md:ml-3 my-2">
    <Link to={`/article/${id}/edit`} className="group flex items-center text-sm leading-3 font-semibold bg-gray-400/10 text-gray-600 rounded-lg py-2 px-3 mr-2 hover:bg-gray-400/40">
      <svg height="18" width="18" xmlns="http://www.w3.org/2000/svg" className="h-3.5">
        <path d="M931.9,58.4c-33.3-31.9-70-48.1-109.3-48.1c-61.3,0-106,39.6-118.3,51.7c-17.2,17-604.7,604.7-604.7,604.7c-3.8,3.9-6.6,8.6-8.1,13.9C78.4,729.7,12,946.9,11.4,949.2c-3.4,11.1-0.4,23.3,7.8,31.4c5.9,5.9,13.8,9.1,21.8,9.1c3.2,0,6.4-0.5,9.5-1.5c2.2-0.7,226.5-73.2,263.4-84.2c4.9-1.5,9.3-4.1,12.9-7.7c23.3-23,571.2-564.9,607.6-602.4c37.6-38.8,56.3-79.1,55.6-120C989.3,133.5,969.7,94.7,931.9,58.4z M694.7,159.9c15.5,3.7,52.1,15.9,89.8,53.9c38,38.4,48.2,82.1,50.1,91.9c-120.2,119.6-397,393.4-506,501.2c-10-23.5-26-51.7-52.4-78.2c-32-32.2-64.5-50.4-89.6-60.6C294.5,560.1,576.3,278.2,694.7,159.9z M145.1,719.6c16.8,4.5,51.6,17.3,87.3,53.3c27.4,27.7,40.3,58.1,46.1,76.7c-42.3,13.5-135.3,45.6-194.6,64.8C101.4,856.6,130.9,766.9,145.1,719.6z M890.1,250.1c-1.3,1.3-3.3,3.4-5.8,5.9c-9.7-24.9-26.6-56.8-55.9-86.4c-30.1-30.3-60.4-48-84.9-58.5c2.1-2.1,3.8-3.8,4.4-4.4c3.5-3.5,35.2-33.8,74.8-33.8c22.8,0,45.1,10.4,66.5,30.9C914.5,128,927.5,152,928,175C928.4,198.5,915.6,223.7,890.1,250.1z" transform="matrix(0.082, 0, 0, 0.082, 0, 0) scale(0.16)" fill="gray"></path>
      </svg>
      수정
    </Link>
    <button onClick={handleDelete(id)} className="group flex items-center text-sm leading-3 font-semibold bg-gray-400/10 text-gray-600 rounded-lg py-2 px-3 mr-2 hover:bg-gray-400/40">
      <svg height="18" width="18" xmlns="http://www.w3.org/2000/svg" className="h-3.5">
        <path d="M653.1,867.5c16.8,0,30.6-13.8,30.6-30.6V469.4c0-16.8-13.8-30.6-30.6-30.6c-16.8,0-30.6,13.8-30.6,30.6v367.5C622.5,853.7,636.3,867.5,653.1,867.5z M346.9,867.5c16.8,0,30.6-13.8,30.6-30.6V469.4c0-16.8-13.8-30.6-30.6-30.6s-30.6,13.8-30.6,30.6v367.5C316.3,853.7,330,867.5,346.9,867.5z M836.9,132.5H653.1V71.3c0-33.7-27.6-61.3-61.3-61.3H408.1c-33.7,0-61.3,27.6-61.3,61.3v61.3H163.1c-33.7,0-61.3,27.6-61.3,61.3V255c0,33.7,27.6,61.3,61.3,61.3v551.3c0,67.4,55.1,122.5,122.5,122.5h428.8c67.4,0,122.5-55.1,122.5-122.5V316.3c33.7,0,61.3-27.6,61.3-61.3v-61.2C898.1,160.1,870.6,132.5,836.9,132.5z M408.1,101.9c0-16.8,13.8-30.6,30.6-30.6h122.5c16.8,0,30.6,13.8,30.6,30.6v30.6c-29.9,0-183.8,0-183.8,0V101.9z M775.6,867.5c0,33.7-27.6,61.3-61.3,61.3H285.6c-33.7,0-61.3-27.6-61.3-61.3V316.3h551.3V867.5z M806.3,255H193.8c-16.8,0-30.6-13.8-30.6-30.6s13.8-30.6,30.6-30.6h612.5c16.8,0,30.6,13.8,30.6,30.6S823.1,255,806.3,255z M500,867.5c16.8,0,30.6-13.8,30.6-30.6V469.4c0-16.8-13.8-30.6-30.6-30.6s-30.6,13.8-30.6,30.6v367.5C469.4,853.7,483.2,867.5,500,867.5z" transform="matrix(0.092, 0, 0, 0.092, 0, 0) scale(0.15)" fill="gray"></path>
      </svg>
      삭제
    </button>
  </div>
}