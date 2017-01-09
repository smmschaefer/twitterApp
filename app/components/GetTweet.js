import React, { Component } from 'react'
import axios from 'axios'
import hmacsha1 from 'hmacsha1'


const tweet = 'https://api.twitter.com/1.1/search/tweets.json?q=SamSchaeferSays';
const myGit = 'https://api.github.com/users/smmschaefer';

const consumerKey = "Zo6xzF7ncTX95t4h0NaDPANB8";
let nonce = createNonce();;
const signatureMethod = "HMAC-SHA1";
const timeStamp = Date.now();
const token = "818542570833788928-szvyxgZ2OP8UsJuk3ov175Bbn9i0l7u";
const hiddenToken ="JRdNAir4q7OUQ6uXlshAECnOIvhDnIpztjhQR1g7L4c44hyaIS";
const sig = `${consumerKey}&${hiddenToken}`;
const signature = btoa(hmacsha1(sig, "ok"));

const DST = `OAuth oauth_consumer_key="${consumerKey}", oauth_nonce="${nonce}", oauth_signature="${signature}", oauth_signature_method="${signatureMethod}", oauth_timestamp="${timeStamp}", oauth_token="${token}", oauth_version="1.0"`;

function createNonce() {
	 let randMe = "";
	 let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	     for( var i=0; i < 5; i++ )
	         randMe += possible.charAt(Math.floor(Math.random() * possible.length));
	 return btoa(randMe);
 }

function getUserTweet() {
    return axios.get(`${tweet}`, { headers: { 'Authorization': `${DST}` } }).then(function(response){
        console.log(response.data)
        console.log(response.status)
    }).catch(function(error) {
    	console.log(error)
    });
}

class GetTweet extends Component {
	
	callTweet() {
		console.log("working?");
		getUserTweet();
		console.log("Maybe?");
	}
	
	render() {
		return(
			<div>
				Calling getUserTweet <br />
				<button type="Submit" onClick={this.callTweet.bind(this)}>CLICK</button>
			</div>
		)
	}
}


export default GetTweet;