import { Button } from "../ui/button"

const SessionLastSection = () => {
    return (
        <div className="px-8 py-16 bg-white flex justify-between rounded-[10px] shadow-lg flex-wrap gap-5 sm:flex-nowrap sm:mt-12   ">
            <div className="flex flex-col gap-2">
                <p className="text-[#15134B] font-bold text-xl">Sessions By Device</p>
                <p className="text-[#A3ABBD] font-medium text-[13px]">Top Region & session</p>
            </div>
            <Button variant={"default"} className="bg-[#563BFF] py-6 px-12 font-bold text-[16px] rounded-[10px]">View</Button>
        </div>
    )
}

export default SessionLastSection