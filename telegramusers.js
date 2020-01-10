//first click on user list and then run this script
var user_link=document.getElementsByClassName('md_modal_list_peer_name');

function getuserid(i)
{
	if(i<user_link.length)
	{
		user_link[i].click();
		setTimeout(function(){ getid(i) }, 3000);
	}
	else
	{
		var possibleuser=0;
		var userids=document.getElementsByClassName('md_modal_section_param_value');
		for(j=0;j<userids.length;j++)
		{
			var selectedid=userids[j].innerText;
			if(selectedid.indexOf('@')!=-1 && selectedid.indexOf('bot')==-1 && selectedid.trim().length<20)
			{
				console.log(selectedid.trim());
				possibleuser++;
			}
		}
		console.log(possibleuser);
		return;
	}
}
var lastlen=0;
function getid(i)
{
	getuserid(i+2);
}
getuserid(1);