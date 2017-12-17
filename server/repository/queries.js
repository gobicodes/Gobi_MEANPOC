const getallcampaignrequests="SELECT DATE_FORMAT(launch_datetime, '%Y-%m-%dT%H:%i:%s') as start,\
campaigns.created_date, \
campaigns.creator_id, \
campaigns.campaign_id,\
campaigns.campaign_name,\
campaigns.local_holdout_needed,\
campaigns.EMRB_number,\
campaigns.RDR_number,\
campaigns.purpose,\
campaigns.offer_details,\
campaigns.languages,\
campaigns.no_of_communication_waves,\
campaigns.target_country,\
campaigns.membership,\
campaigns.channel,\
campaigns.value_segments,\
campaigns.corridors,\
campaigns.other_criteria,\
campaigns.campaign_name as title,\
campaigns.comments \
FROM campaigns";

const getcamprequestbyid="SELECT DATE_FORMAT(launch_date, '%Y-%m-%dT%H:%i:%s') as start,\
campaigns.created_date, \
campaigns.creator_id, \
campaigns.campaign_id,\
campaigns.campaign_name,\
campaigns.local_holdout_needed,\
campaigns.EMRB_number,\
campaigns.RDR_number,\
campaigns.purpose,\
campaigns.offer_details,\
campaigns.languages,\
campaigns.no_of_communication_waves,\
campaigns.target_country,\
campaigns.membership,\
campaigns.channel,\
campaigns.value_segments,\
campaigns.corridors,\
campaigns.other_criteria,\
campaigns.campaign_name as title,\
campaigns.comments \
FROM campaigns WHERE campaigns.creator_id="

const getcampaignbyIdquery = "SELECT * FROM campaigns WHERE campaign_id = "

const createcampaignrequestquery ="INSERT INTO campaigns SET ?";

const insertcampaignwavesquery = "INSERT INTO campaign_waves  SET ?"


const updatecampaignrequestquery = "UPDATE campaigns SET ? WHERE campaign_id = ? ";

const deletecampaignwavesquery = "DELETE FROM campaign_waves WHERE campaign_id =  ";

const deletecampaignrequestquery = "DELETE FROM campaigns WHERE campaign_id =  ";

const createuserquery ="INSERT INTO users SET ?";

const getalluserquery = "SELECT u.user_id,u.user_name,u.email_address,u.role_id,r.role_name,u.password FROM wu_gcc.users u join wu_gcc.roles r on u.role_id = r.role_id "

const getuserquery = "SELECT * FROM users WHERE user_id = "

const updateuserquery ="UPDATE users SET ?  WHERE user_id = ?";

const deleteuserquery = "DELETE FROM users WHERE user_id = "

const getroles ="select role_id as value, role_name as title from roles"

const getUserByUserNameQuery = "SELECT u.user_id, u.user_name, u.password, r.role_name FROM users u JOIN roles r on r.role_id = u.role_id WHERE u.user_name = ?"

//Add you key and value and export it
      
module.exports = {getallcampaignrequests, createcampaignrequestquery, insertcampaignwavesquery, deletecampaignwavesquery,
     getcampaignbyIdquery, updatecampaignrequestquery, createuserquery,
      getalluserquery, getuserquery, deleteuserquery,getroles,updateuserquery,
       getUserByUserNameQuery,getcamprequestbyid }
      
