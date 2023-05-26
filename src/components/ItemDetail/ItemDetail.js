import React, { Component, useState } from 'react';
import { useAccount } from 'wagmi';
import { ethers } from 'ethers';
import mainNftRaffle from '../contracts/mainNftRaffle.json';
import toast, { Toaster } from 'react-hot-toast';

const initData = {
    itemImg: "/img/auction_2.jpg", // nft image source
    itemOwner: "0xc092ewd...1313", // raffleCreator
    date: "2025-03-30", // end time
    raffleName: "Raffle_Name", // raffle Name
    Ticket_price: "2.9 BNB", // ticket price
    totalTickets: `1 of 5`, // (totalAvailableTickets - totalSoldTickets) of totalAvailableTickets
    btnText: "Buy Tickets"
}

const aboutRaffle = [
    {
        id: "1",
        seller: "NFT",
        post: "Creator"
    },
    {
        id: "2",
        seller: "Charity",
        post: "UNICEF USA"
    }
]

const ItemDetails = () => {

    const { account } = useAccount();
    const [raffleName, setRaffleName] = useState('');
    const [nftPrice, setNftPrice] = useState('');
    const [ticketPrice, setTicketPrice] = useState('');
    const [totalVolumeofTickets, setTotalVolumeofTickets] = useState('');
    const [endTime, setEndTime] = useState('');
    const [nftId, setNftId] = useState('');
    const [nftContractAddress, setNftContractAddress] = useState('');
    const [nftSourceLink, setNftSourceLink] = useState('');
    const [charityAddress, setCharityAddress] = useState('');
    const [showToast, setShowToast] = useState(false);
      
      const handleEndTimeChange = (inputDate) => {
        const date = new Date(inputDate);
        const unixTime = Math.floor(date.getTime() / 1000); // convert to Unix timestamp
        setEndTime(unixTime);
      };            

    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const notify = () => {
        toast.success(`The transaction is successful`);
        setShowToast(true); // set the state variable to true when the toast should be displayed
      };
      const notifyError = () => {
        toast.error(`Something went wrong. Please try again.`);
        setShowToast(true); // set the state variable to true when the toast should be displayed
      };

    const handleSubmit = async (event) => {
    event.preventDefault();
    const contract = new ethers.Contract(
      mainNftRaffle.networks['80001'].address,
      mainNftRaffle.abi,
      provider.getSigner(account)
    );

    try {
      const input = await contract.raffleInfo(
        raffleId,
      );
      console.log(input);
      notify();
    } catch (err) {
      console.log(err);
      notifyError();
    }
  };
        return (
            <section className="item-details-area">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-12 col-lg-5">
                            <div className="item-info">
                                <div className="item-thumb text-center">
                                    <img src={this.state.initData.itemImg} alt="" />
                                </div>
                                <div className="card no-hover countdown-times my-4">
                                    <div className="countdown d-flex justify-content-center" data-date={this.state.initData.date} />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            {/* Content */}
                            <div className="content mt-5 mt-lg-0">
                                <h3 className="m-0">{this.state.initData.title}</h3>
                                <p>{this.state.initData.content}</p>
                                {/* Owner */}
                                <div className="owner d-flex align-items-center">
                                    <span>Created By</span>
                                    <a className="owner-meta d-flex align-items-center ml-3" href="/">
                                        <h6 className="ml-2">{this.state.initData.itemOwner}</h6>
                                    </a>
                                </div>
                                <div className="row items">
                                    {this.state.aboutRaffle.map((item, idx) => {
                                        return (
                                            <div key={`sd_${idx}`} className="col-12 col-md-6 item px-lg-2">
                                                <div className="card no-hover">
                                                    <div className="single-seller d-flex align-items-center">
                                                        {/* Seller Info */}
                                                        <div className="seller-info ml-3">
                                                            <a className="seller mb-2" href="/">{item.seller}</a>
                                                            <span>{item.post}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                    <div className="col-12 item px-lg-2">
                                        <div className="card no-hover">
                                            <h4 className="mt-0 mb-2">Available Tickets</h4>
                                            <div className="price d-flex justify-content-between align-items-center">
                                                <span>{this.state.initData.Ticket_price}</span>
                                                <span>{this.state.initData.totalTickets}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="d-block btn btn-bordered-white mt-4" href="/">{this.state.initData.btnText}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };

export default ItemDetails;