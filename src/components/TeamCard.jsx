import React from "react";

function TeamCard() {
  return (
    <div className="bg-white h-max rounded-lg my-5 lg:p-6 p-2">
      <div>
        <div className="text-2xl text-[#0F1629] font-semibold">Team</div>
        <div className="text-[#3E424A] text-[16px] font-medium my-4 pt-2">
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
          nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
          quam. Facilisis purus convallis quam augue.
        </div>
        <div className="">
          <Card
            name="John Smith"
            des="Designation here"
            link="data:image/jpeg;base64,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"
          />
          <Card
            name="Elina Williams"
            des="Designation here"
            link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm3lUY6o5AWynY11qKS7idrk5LVrEXGkK1qPzccF_vtyErS3hejVFgQCPp-pxnrDcGyhI&usqp=CAU"
          />
          <Card
            name="kane williamson"
            des="Designation here"
            link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNB6_E-U0ckFjUySvWU28QyjYpMb38iX3ay9zETvuE0d-_k2amRkFNBWevjmtlWd5l3EE&usqp=CAU"
          />
        </div>
      </div>
    </div>
  );
}

function Card({ name, link, des }) {
  return (
    <div className="md:flex bg-[#E8F4FD] rounded-lg py-4 md:px-8 my-6">
      <div className="justify-center flex flex-col items-center">
        <div>
          <img className="rounded-xl w-44 lg:w-96" src={link} alt="" />
        </div>
        <div className="text-[#0F1629] text-[15px] font-semibold py-1">
          {name}
        </div>
        <div className="text-[#788F9B] text-xs font-medium">{des}</div>
      </div>
      <div className="flex justify-center items-center px-4 ml-4 text-[#0F1629] text-sm font-normal">
        Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
        fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
        nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque
        sed pellentesque viverra. Consectetur proin amet ut id facilisi quis
        consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est
        ipsum. Malesuada etiam mi gravida praesent interdu
      </div>
    </div>
  );
}

export default TeamCard;
