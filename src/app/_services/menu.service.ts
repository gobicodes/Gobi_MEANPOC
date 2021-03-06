import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {
    getSendoutTypes() {
        return ['Ad-Hoc',
            'Program'
        ];
    }
    getMembership() {
        return [
            'Members', 'Nonmembers', 'All'
        ];
    }

    getValueSegments() {
        return [
            'HVC', 'nonHVC', 'All'
        ];
    }
    getMarketingStrategies() {
        return ['Corridor_APAC',
        'Corridor_CA',
        'Corridor_EU',
        'Corridor_LACA',
        'Corridor_MEA',
        'Corridor_US',
        'LifeCycle_APAC',
        'Lifecycle_CA',
        'Lifecycle_EU',
        'LifeCycle_LACA',
        'Lifecycle_MEA',
        'Lifecycle_US',
        'Membership_APAC',
        'Membership_CA',
        'Membership_EU',
        'Membership_LACA',
        'Membership_MEA',
        'Membership_US',
        'Product_APAC',
        'Product_CA',
        'Product_EU',
        'Product_LACA',
        'Product_MEA',
        'Product_US',
        'Projects_APAC',
        'Projects_CA',
        'Projects_EU',
        'Projects_LACA',
        'Projects_MEA',
        'Projects_US',
        'Seasonal_APAC',
        'Seasonal_CA',
        'Seasonal_EU',
        'Seasonal_LACA',
        'Seasonal_MEA',
        'Seasonal_US',
        'Service',
        'Triggered_APAC',
        'Triggered_CA',
        'Triggered_EU',
        'Triggered_LACA',
        'Triggered_MEA',
        'Triggered_US'];
    }

    getMarketingPrograms() {
        return ['3MI',
        'Live More',
        'Share more',
        'AbandonedCart',
        'Active',
        'Agent Specific',
        'Anniversary',
        'APN/D2B promotion',
        'Bank Decline',
        'Bill Pay',
        'COB',
        'Diwali',
        'DMT',
        'Drive2Mobile',
        'DSS',
        'Face of MYWU',
        'Facebook'];
    }

    getCountries() {
        return [
            'Afghanistan',
            'Albania',
            'Algeria',
            'American Samoa',
            'Andorra',
            'Angola',
            'Anguilla',
            'Antarctica',
            'Antigua and Barbuda',
            'Argentina',
            'Armenia',
            'Aruba',
            'Australia',
            'Austria',
            'Azerbaijan',
            'Bahamas',
            'Bahrain',
            'Bangladesh',
            'Barbados',
            'Belarus',
            'Belgium',
            'Belize',
            'Benin',
            'Bermuda',
            'Bhutan',
            'Bolivia',
            'Bosnia and Herzegovina',
            'Botswana',
            'Bouvet Island',
            'Brazil',
            'British Antarctic Territory',
            'British Indian Ocean Territory',
            'British Virgin Islands',
            'Brunei',
            'Bulgaria',
            'Burkina Faso',
            'Burundi',
            'Cambodia',
            'Cameroon',
            'Canada',
            'Canton and Enderbury Islands',
            'Cape Verde',
            'Cayman Islands',
            'Central African Republic',
            'Chad',
            'Chile',
            'China',
            'Christmas Island',
            'Cocos [Keeling] Islands',
            'Colombia',
            'Comoros',
            'Congo - Brazzaville',
            'Congo - Kinshasa',
            'Cook Islands',
            'Costa Rica',
            'Croatia',
            'Cuba',
            'Cyprus',
            'Czech Republic',
            'Côte d’Ivoire',
            'Denmark',
            'Djibouti',
            'Dominica',
            'Dominican Republic',
            'Dronning Maud Land',
            'East Germany',
            'Ecuador',
            'Egypt',
            'El Salvador',
            'Equatorial Guinea',
            'Eritrea',
            'Estonia',
            'Ethiopia',
            'Falkland Islands',
            'Faroe Islands',
            'Fiji',
            'Finland',
            'France',
            'French Guiana',
            'French Polynesia',
            'French Southern Territories',
            'French Southern and Antarctic Territories',
            'Gabon',
            'Gambia',
            'Georgia',
            'Germany',
            'Ghana',
            'Gibraltar',
            'Greece',
            'Greenland',
            'Grenada',
            'Guadeloupe',
            'Guam',
            'Guatemala',
            'Guernsey',
            'Guinea',
            'Guinea-Bissau',
            'Guyana',
            'Haiti',
            'Heard Island and McDonald Islands',
            'Honduras',
            'Hong Kong SAR China',
            'Hungary',
            'Iceland',
            'India',
            'Indonesia',
            'Iran',
            'Iraq',
            'Ireland',
            'Isle of Man',
            'Israel',
            'Italy',
            'Jamaica',
            'Japan',
            'Jersey',
            'Johnston Island',
            'Jordan',
            'Kazakhstan',
            'Kenya',
            'Kiribati',
            'Kuwait',
            'Kyrgyzstan',
            'Laos',
            'Latvia',
            'Lebanon',
            'Lesotho',
            'Liberia',
            'Libya',
            'Liechtenstein',
            'Lithuania',
            'Luxembourg',
            'Macau SAR China',
            'Macedonia',
            'Madagascar',
            'Malawi',
            'Malaysia',
            'Maldives',
            'Mali',
            'Malta',
            'Marshall Islands',
            'Martinique',
            'Mauritania',
            'Mauritius',
            'Mayotte',
            'Metropolitan France',
            'Mexico',
            'Micronesia',
            'Midway Islands',
            'Moldova',
            'Monaco',
            'Mongolia',
            'Montenegro',
            'Montserrat',
            'Morocco',
            'Mozambique',
            'Myanmar [Burma]',
            'Namibia',
            'Nauru',
            'Nepal',
            'Netherlands',
            'Netherlands Antilles',
            'Neutral Zone',
            'New Caledonia',
            'New Zealand',
            'Nicaragua',
            'Niger',
            'Nigeria',
            'Niue',
            'Norfolk Island',
            'North Korea',
            'North Vietnam',
            'Northern Mariana Islands',
            'Norway',
            'Oman',
            'Pacific Islands Trust Territory',
            'Pakistan',
            'Palau',
            'Palestinian Territories',
            'Panama',
            'Panama Canal Zone',
            'Papua New Guinea',
            'Paraguay',
            'People\'s Democratic Republic of Yemen',
            'Peru',
            'Philippines',
            'Pitcairn Islands',
            'Poland',
            'Portugal',
            'Puerto Rico',
            'Qatar',
            'Romania',
            'Russia',
            'Rwanda',
            'Réunion',
            'Saint Barthélemy',
            'Saint Helena',
            'Saint Kitts and Nevis',
            'Saint Lucia',
            'Saint Martin',
            'Saint Pierre and Miquelon',
            'Saint Vincent and the Grenadines',
            'Samoa',
            'San Marino',
            'Saudi Arabia',
            'Senegal',
            'Serbia',
            'Serbia and Montenegro',
            'Seychelles',
            'Sierra Leone',
            'Singapore',
            'Slovakia',
            'Slovenia',
            'Solomon Islands',
            'Somalia',
            'South Africa',
            'South Georgia and the South Sandwich Islands',
            'South Korea',
            'Spain',
            'Sri Lanka',
            'Sudan',
            'Suriname',
            'Svalbard and Jan Mayen',
            'Swaziland',
            'Sweden',
            'Switzerland',
            'Syria',
            'São Tomé and Príncipe',
            'Taiwan',
            'Tajikistan',
            'Tanzania',
            'Thailand',
            'Timor-Leste',
            'Togo',
            'Tokelau',
            'Tonga',
            'Trinidad and Tobago',
            'Tunisia',
            'Turkey',
            'Turkmenistan',
            'Turks and Caicos Islands',
            'Tuvalu',
            'U.S. Minor Outlying Islands',
            'U.S. Miscellaneous Pacific Islands',
            'U.S. Virgin Islands',
            'Uganda',
            'Ukraine',
            'Union of Soviet Socialist Republics',
            'United Arab Emirates',
            'United Kingdom',
            'United States',
            'Unknown or Invalid Region',
            'Uruguay',
            'Uzbekistan',
            'Vanuatu',
            'Vatican City',
            'Venezuela',
            'Vietnam',
            'Wake Island',
            'Wallis and Futuna',
            'Western Sahara',
            'Yemen',
            'Zambia',
            'Zimbabwe',
            'Åland Islands'
        ];
    }
}
