import React from 'react';
import './aboutSection.css';
import { Button, Typography, Avatar } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
const About = () => {
	const visitInstagram = () => {
		window.location = 'https://www.instagram.com/manish_elaganti';
	};
	return (
		<div className='aboutSection'>
			<div></div>
			<div className='aboutSectionGradient'></div>
			<div className='aboutSectionContainer'>
				<Typography component='h1'>About Us</Typography>

				<div>
					<div>
						<Avatar
							style={{ width: '10vmax', height: '10vmax', margin: '2vmax 0' }}
							src='https://res.cloudinary.com/dytffimtv/image/upload/v1638813095/avatars/hnq6pmjriuc4bmennk6d.jpg'
							alt='Founder'
						/>
						<Typography>Manish elaganti </Typography>
						<Button onClick={visitInstagram} color='primary'>
							Visit Instagram
						</Button>
						<span>
							This is a sample wesbite made by @manish. Only with the purpose to
							teach MERN Stack on the channel 6 Pack Programmer
						</span>
					</div>
					<div className='aboutSectionContainer2'>
						<Typography component='h2'>Our Brands</Typography>
						{/* <a
							href='https://www.youtube.com/channel/UCO7afj9AUo0zV69pqEYhcjw'
							target='blank'>
							<YouTubeIcon className='youtubeSvgIcon' />
						</a> */}

						<a href='https://instagram.com/manish_elaganti' target='blank'>
							<InstagramIcon className='instagramSvgIcon' />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
