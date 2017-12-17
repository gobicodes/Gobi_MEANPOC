export class CampaignDetails {
    campaign_id: string = null;
    sendout_type: string = null;
    created_date: string = null;
    start: string = null;
    launch_datetime: string = null;
    campaign_name: string = null;
    no_of_waves: string = null;
    creator_id: string =  null;
    local_holdout_needed: string = null;
    emrb_number: string = null;
    rdr_number: string = null;
    purpose: string = null;
    offer_details: string = null;
    marketing_strategy: string = null;
    marketing_program: string = null;
    languages: string = null;
    target_country: string = null;
    membership: string = null;
    channel: string = null;
    value_segments: string = null;
    corridors: string = null;
    other_criteria: string = null;
    title: string = null;
    comments_box: string = null;
    comments: string = null;
    request_status: string = null;
    waves:  Wave[] ;
    constructor() {}
}

type Wave = {
    campaign_id: string;
    launch_datetime: string
    wave_subject_line: string;
    wave_disable: boolean;
};
