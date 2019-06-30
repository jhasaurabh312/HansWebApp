import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig, MatStepper } from '@angular/material';
import { Router } from '@angular/router';

export interface StateGroup {
  letter: string;
  names: string[];
}
export interface hd {
  group: string;
  mapping_id: number;
  names: string[];
}


@Component({
  selector: 'app-register-two',
  templateUrl: './register-two.component.html',
  styleUrls: ['./register-two.component.scss']
})
export class RegisterTwoComponent implements OnInit {

  time = {
    hour: 13,
    minute: 30
  };
  currentCity;
  maritalStatus;
  gender;
  motherTongue;
  caste;
  maxHeight;
  minHeight;
  minAge;
  maxAge;
  birthDate: any;
  indexForHeight: number;
  isCompleted1 = false;
  isCompleted2 = false;
  isCompleted3 = false;
  isCompleted4 = false;
  isCompleted5 = false;
  dateofBirth: '';
  success = [];
  startDate = new Date(1985, 0, 1);
  birthdayValid: Boolean;
  AccountDetails: FormGroup;
  secondFormGroup: FormGroup;
  otpForm: FormGroup;
  otp: string = '';
  otpVerified: boolean = false;
  otp1: any;
  otp2: any;
  otp3: any;
  otp4: any;
  PreferencesDetails: FormGroup;
  EducationDetails: FormGroup;
  changeNumber: boolean = false;
  FamilyDetails: FormGroup;
  stateForm: FormGroup;
  mapping_id: number;
  manglikValue: string;
  manglikPreference = ['Manglik', 'Anshik Manglik'];
  nonManglikPreference = ['Non-Manglik', 'Anshik Manglik'];
  castePref: any;
  prefManglik = [];

  Caste: Boolean = false;
  AllCastes: Boolean = false;
  HoroScopes: Boolean = false;
  Mangaliks: Boolean = false;
  public imagePath;
  fullimagePath;
  frontimagePath;
  backimagePath;
  imgURL: any;
  BackimgURL;
  frontfile;
  fullimgURL;
  fd: false;
  currentAge: number;
  public message: string;
  degrees: any = [];
  S = false;
  Advertise = true;
  today: any;
  dd: any;
  mm: any;
  yyyy: any;
  dropdownList: any = [];
  selectedItems = [];
  selectedItems1: any = [];
  dropdownSettings = {};

  HigherEducation: hd[] = [{
      group: 'Engineering Design',
      mapping_id: 4,
      names: ["B.E\/B.Tech", "B.Pharma", "M.E\/M.Tech", "M.Pharma", "M.S. Engineering", "B.Arch", "M.Arch", "B.Des", "M.Des"]
    }, {
      group: 'Computers',
      mapping_id: 4,
      names: ["MCA\/PGDCA", "BCA", "B.IT"]
    }, {
      group: 'Finance',
      mapping_id: 4,
      names: ["B.Com", "CA", "CS", "ICWA", "M.Com", "CFA"]
    }, {
      group: 'Managment',
      mapping_id: 4,
      names: ["MBA\/PGDM", "BBA", "BHM"]
    },
    {
      group: 'Medicine',
      mapping_id: 4,
      names: ["MBBS", "M.D.", "BAMS", "BHMS", "BDS", "M.S. (Medicine)", "MVSc.", "BvSc.", "MDS", "BPT", "MPT", "DM", "MCh"]
    },
    {
      group: 'Law',
      mapping_id: 4,
      names: ["BL\/LLB", "ML\/LLM"]
    },
    {
      group: 'Arts\/Science"',
      mapping_id: 4,
      names: ["B.A", "B.Sc.", "M.A.", "M.Sc.", "B.Ed", "M.Ed", "MSW", "BFA", "MFA", "BJMC", "MJMC"]
    },
    {
      group: 'Doctorate',
      mapping_id: 4,
      names: ["Ph.D", "M.Phil"]
    },
    {
      group: 'Non Graduate',
      mapping_id: 4,
      names: ["Diploma", "High School", "Trade School", "Other"]
    }
  ];
  stateGroups: StateGroup[] = [{
    letter: 'North',
    names: ["Hindi-Delhi",
      'Hindi-MP',
      'Hindi-UP',
      'Punjabi',
      'Bihari',
      'Rajasthani/Marwari',
      'Haryanvi',
      'Himachali',
      'Kashmiri',
      'Sindhi', 'Urdu'
    ]
  }, {
    letter: 'East',
    names: ['Bengali', 'Oriya', 'Assamese', 'Sikkim/ Nepali']
  }, {
    letter: 'South',
    names: ['Tamil',
      'Telugu',
      'Kannada',
      'Malayalam',
      'Tulu',
      'Urdu'
    ]
  }, {
    letter: 'West',
    names: ['Marathi',
      'Gujarati / Kutchi',
      'Hindi-MP',
      'Konkani',
      'Sindhi'
    ]
  }, {
    letter: 'Others',
    names: ['English']
  }];
  Heights: string[] = ['4.0"', '4.1"', '4.2"', '4.3"', '4.4"', '4.5"', '4.6"', '4.7"', '4.8"', '4.9"', '5.0', '5.1"', '5.2"', '5.3"', '5.5"', '5.5"', '5.6"', '5.7"', '5.8"', '5.9"', '6.0"', '6.1"', '6.2"', '6.3"', '6.6"', '6.5"', '6.6"', '6.7"', '6.8"', '6.9"', '7.0"'];
  Religions: string[] = ['Hindu', 'Muslim', 'Sikh', 'Christian', 'Buddhist', 'Jain', 'Parsi', 'Jewish', 'Bahai'];
  MaritalStaus: string[] = ['Never Married', 'Awaiting Divorce', 'Divorced', 'Widowed', 'Anulled'];
  Occupation: string[] = ['Private Company', 'Business/Self Employed', 'Government Job', 'Doctor', 'Teacher', 'Not Working'];
  Working: string[] = ['Working', 'Not Working', "Doesn't matter"]
  AnnualIncome: any[] = ['No Income', 'Rs 0-1 Lakh', 'Rs 1-2 Lakh', 'Rs 2-3 Lakh', 'Rs 3-4 Lakh', 'Rs 4-5 Lakh', 'Rs 5-7.5 Lakh',
    'Rs 7.5-12 Lakh',
    'Rs 12-15 Lakh', 'Rs 15-20 Lakh', 'Rs 20-25 Lakh', 'Rs 25-50 Lakh', 'Rs 50Lakh-1Crore', 'Rs 1Crore+'
  ];
  Castes: hd[];
  Mangalika: string[];
  HoroScope: string[];
  Sects: string[];
  foodpreferences1: string[] = ['Non-vegetarian', 'Vegetarian'];
  foodpreferences: string[] = ["Doesn't matter", 'Non-vegetarian', 'Vegetarian'];
  createProfile: string[] = ['Self', 'Son', 'Daughter', 'Brother', 'Sister', 'Other'];
  Gender: string[] = ['Male', 'Female', 'Others'];
  FamilyType: string[] = ['JointFamily', 'Nuclear Family', 'Others'];
  FatherOccupation: string[] = ['Buisness', 'Service', 'Army'];
  MotherOccupation: string[] = ['Housewife', 'Buisness', 'Service', 'Army', 'Private Company',
    'Business/Self Employed', 'Government Job', 'Doctor', 'Teacher', 'Not Working'
  ];
  Brother: any[] = ['None', 0, 1, 2, 3, '3+'];
  Sister: any[] = ['None', 0, 1, 2, 3, '3+'];
  state: string[] = ['Andaman & Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh',
    'Assam', 'Bihar', 'Chhattisgarh', 'Dadra & Nagar Haveli',
    'Daman & Diu', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu & Kashmir',
    'Jharkhand', 'Karnataka', 'Kerala', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Pondichery', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];


  FamilyOptions: Observable < string[] > ;
  ProfileOptions: Observable < string[] > ;
  GenderOptions: Observable < string[] > ;
  fo: Observable < string[] > ;
  mo: Observable < string[] > ;
  bro: Observable < any[] > ;
  sis: Observable < any[] > ;
  stateo: Observable < string[] > ;
  citis: Observable < string[] > ;
  ReligionOptions: Observable < string[] > ;
  MartalStatusOtions: Observable < string[] > ;
  // stateGroupOptions: Observable < StateGroup[] > ;
  // CasteOptions: Observable < hd[] > ;
  MangalikOptions: Observable < string[] > ;
  HoroScopeOptions: Observable < string[] > ;
  OccupatiinOptions: Observable < string[] > ;
  AOptions: Observable < any[] > ;
  // HigherEducationOptions: Observable < hd[] > ;
  constructor(public dialog: MatDialog, private _formBuilder: FormBuilder,  private router: Router) {
    this.stateForm = this._formBuilder.group({
      'stateGroup': ['', Validators
        .compose([Validators.required])
      ],
      'Religion': ['', Validators.compose([Validators.required])],
      'MaritalStatus': ['', Validators.compose([Validators.required])],
      'Height': ['', Validators.compose([Validators.required, Validators.maxLength(4)])],
      'Weight': ['', Validators.compose([Validators.required, Validators.maxLength(4)])],
      'Castes': ['', Validators.compose([])],
      'Mangalik': ['', Validators.compose([])],
      'gotra': ['', Validators.compose([])],
      'HoroScope': ['', Validators.compose([])],
      'Sect': ['', Validators.compose([])],
      'Open': [false],
      'Currentcity': ['', Validators.compose([Validators.required])],
    });
    this.AccountDetails = this._formBuilder.group({
      'mail': ['', Validators.compose([Validators.required])],
      'key': ['', Validators.compose([Validators.required])],
      'fullname': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'create': ['', Validators.compose([Validators.required])],
      'gender': ['', Validators.compose([Validators.required])],
      'phoneNumber': ['', Validators.compose([Validators.pattern('[0-9]*'),
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ])],
      'whatsappNumber': ['', Validators.compose([Validators.pattern('[0-9]*'),
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ])],
      'Date': ['', Validators.compose([Validators.required])],
      'birth_time': ['', Validators.compose([Validators.required])],
      'birth_place': ['', Validators.compose([Validators.required])],
      'food_choice': ['', Validators.compose([Validators.required])],

    });
    this.EducationDetails = this._formBuilder.group({
      'HighestDegree': ['', Validators.compose([Validators.required])],
      'UgCollege': [''],
      'additional_qualification': [''],
      'Occupation': ['', Validators.compose([Validators.required])],
      'profession': ['', Validators.compose([Validators.required])],
      'AnnualIncome': ['', Validators.compose([Validators.required])],
      'Yourself': ['', Validators.compose([Validators.required])],
      'Company': ['', Validators.compose([Validators.required])],
    });
    this.FamilyDetails = this._formBuilder.group({
      'FamilyType': [''],
      'father_status': [''],
      'mother_status': [''],
      'FatherOccupation': [''],
      'MotherOccupation': [''],
      'brother': [''],
      'sister': [''],
      'umbrother': [''],
      'umsister': [''],
      'state': [''],
      'city': [''],
      'address': [''],
      'about': [''],
      'house_type': [''],
      'family_income': ['']
    });
    this.PreferencesDetails = this._formBuilder.group({
      'description': [''],
      'age_min': [''],
      'age_max': [''],
      'height_min': [''],
      'height_max': [''],
      'caste': [
        [], Validators.required
      ],
      'marital_status': [''],
      'manglik': [''],
      'working': [''],
      'food_choice': [''],
      'mother_tongue': [''],
    });

  }




  Religion(event) {
    console.log(event.currentTarget.value);
    if (event.currentTarget.value === 'Hindu') {
      this.Castes = [{
          group: 'A',
          mapping_id: 4,
          names: [
            'Ad Dharmi',
            'Adi Andhra',
            'Adi Dravida',
            'Adi Karnataka',
            'Agamudayar',
            'Aggarwal',
            'Agri',
            'Ahir',
            'Ahom',
            'Ambalavasi',
            'Arora',
            'Arunthathiyar',
            'Arya Vysya'
          ]
        }, {
          group: 'B',
          mapping_id: 2,
          names: ['Baghel/Gaderiya',
            'Baidya',
            'Baishnab',
            'Baishya',
            'Balija',
            'Balija Naidu',
            'Bania',
            'Banik',
            'Banjara',
            'Bari',
            'Barujibi',
            'Besta',
            'Bhandari',
            'Bhatia',
            'Bhatraju',
            'Bhavsar',
            'Bhovi/Bhoi',
            'Billava',
            'Bisa Agarwal',
            'Bishnoi/Vishnoi',
            'Boyer',
            'Brahmbatt',
            'Brahmin',
            'Brahmin 6000 Niyogi',
            'Brahmin Anavil',
            'Brahmin Audichya',
            'Brahmin Bajkhedwal',
            'Brahmin Bardai',
            'Brahmin Barendra',
            'Brahmin Bhargava',
            'Brahmin Bhatt',
            'Brahmin Bhumihar',
            'Brahmin Brahacharanam',
            'Brahmin BrahmBhatt',
            'Brahmin Brajastha Mathil',
            'Brahmin Dadhich',
            'Brahmin Daivadnya',
            'Brahmin Deshastha',
            'Brahmin Deshastha',
            'Brahmin Dhiman',
            'Brahmin Dravida',
            'Brahmin Dunua',
            'Brahmin Embrandiri',
            'Brahmin Garhwali',
            'Brahmin Gaud Saraswat (GSB)',
            'Brahmin Gaur',
            'Brahmin Goswami',
            'Brahmin Gujar Gaur',
            'Brahmin Gurukkal',
            'Brahmin Halua',
            'Brahmin Havyaka',
            'Brahmin Hoysala',
            'Brahmin Iyengar',
            'Brahmin Iyer',
            'Brahmin Jangid',
            'Brahmin Jangra',
            'Brahmin Jhadua',
            'Brahmin Jhijhotiya',
            'Brahmin Jogi',
            'Brahmin Jyotish',
            'Brahmin Kanyakubj',
            'Brahmin Karhade',
            'Brahmin Kashmiri Pandit',
            'Brahmin Khadayat',
            'Brahmin Khandelwal',
            'Brahmin Khedaval',
            'Brahmin Koknastha',
            'Brahmin Kota',
            'Brahmin Kulin',
            'Brahmin Kumaoni',
            'Brahmin Madhwa',
            'Brahmin Maithil',
            'Brahmin Malviya',
            'Brahmin Mevada',
            'Brahmin Modh',
            'Brahmin Mohyal',
            'Brahmin Nagar',
            'Brahmin Namboodiri',
            'Brahmin Narmadiya',
            'Brahmin Paliwal',
            'Brahmin Panda',
            'Brahmin Pandit',
            'Brahmin Panicker',
            'Brahmin Pareek',
            'Brahmin Pushkarna',
            'Brahmin Rajgor',
            'Brahmin Rarhi',
            'Brahmin Rigvedi',
            'Brahmin Rudraj',
            'Brahmin Sakaldwipi',
            'Brahmin Sanadya',
            'Brahmin Sanketi',
            'Brahmin Saraswat',
            'Brahmin Sarua',
            'Brahmin Saryuparin',
            'Brahmin Shivalli',
            'Brahmin Shrimali',
            'Brahmin Sikhwal',
            'Brahmin Smartha',
            'Brahmin Sri Vishnava',
            'Brahmin Stanika',
            'Brahmin Tapodhan',
            'Brahmin Tyagi',
            'Brahmin Vaidiki',
            'Brahmin Vaikhawas',
            'Brahmin Valam',
            'Brahmin Velanadu',
            'Brahmin Viswa',
            'Brahmin Vyas',
            'Brahmin Yajurvedi',
            'Brahmin Zalora',
            'Brahmo',
            'Bunt/Shetty'
          ]
        },
        {
          group: 'C',
          mapping_id: 4,
          names: [
            'Chamar', 'Chambhar', 'Chandravanshi Kahar', 'Chasa', 'Chattada Sri Vaishnava', 'Chaudary', 'Chaurasia', 'Chettiar', 'Chhetri', 'CKP', 'Coorgi'
          ]
        },
        {
          group: 'D',
          mapping_id: 4,
          names: ['Deshastha Maratha',
            'Devadigas',
            'Devang Koshthi',
            'Devanga',
            'Devendra Kula Vellalar',
            'Dhangar',
            'Dheevara',
            'Dhoba',
            'Dhobi',
            'Dusadh'
          ]
        },
        {
          group: 'E',
          mapping_id: 4,
          names: ['Edigas', 'Ezhava', 'Ezhuthachan']
        },
        {
          group: 'G',
          mapping_id: 3,
          names: ['Gabit',
            'Ganiga',
            'Garhwali',
            'Gavali',
            'Gavara',
            'Ghumar',
            'Goala',
            'Goan',
            'Gomantak Maratha',
            'Gondhali',
            'Goud',
            'Gounder',
            'Gowda',
            'Gramani',
            'Gudia',
            'Gujjar',
            'Gupta',
            'Gurav'
          ]
        },
        {
          group: 'H',
          mapping_id: 4,
          names: ['Hegde']
        },
        {
          group: 'J',
          mapping_id: 4,
          names: ['Jaiswal', 'Jangam', 'Jat', 'Jatav']
        },
        {
          group: 'K',
          mapping_id: 1,
          names: ['Kadava patel',
            'Kahar',
            'Kaibarta',
            'Kalal',
            'Kalar',
            'Kalinga Vysya',
            'Kalwar',
            'Kamboj',
            'Kamma',
            'Kansari',
            'Kapol',
            'Kapu',
            'Kapu Munnuru',
            'Karana',
            'Karmakar',
            'Karuneegar',
            'Kasar',
            'Kashyap',
            'Kayastha',
            'Khandayat',
            'Khandelwal',
            'Kharwar',
            'Khatik',
            'Khatri',
            'Kokanastha Maratha',
            'Koli',
            'Koli Mahadev',
            'Kongu Vellala Gounder',
            'Konkani',
            'Kori',
            'Koshti',
            'Kshatriya',
            'Kshatriya Agnikula',
            'Kudumbi',
            'Kulalar',
            'Kulita',
            'Kumawat',
            'Kumbhakar',
            'Kumhar/Kumbhar',
            'Kummari',
            'Kunbi',
            'Kurmi',
            'Kurmi kshatriya',
            'Kuruba',
            'Kuruhina shetty',
            'Kurumbar',
            'Kushwaha',
            'Kutchi',
            'Kutchi Gurjar'
          ]
        },
        {
          group: 'L',
          mapping_id: 4,
          names: [
            'Lambadi',
            'Leva Patidar',
            'Leva Patil',
            'Lingayat',
            'Lodhi Rajput',
            'Lohana',
            'Lohar',
            'Lubana'
          ]
        },
      ];
      this.Mangalika = ['Manglik', 'Non-manglik', 'Anshik manglik'];
      this.HoroScope = ['Must', 'Not Necessary'];
      this.Caste = true;
      this.S = false;
      this.AllCastes = true;
      this.HoroScopes = true;
      this.Mangaliks = true;
    } else if (event.currentTarget.value === 'Muslim') {
      this.Castes = [{
        group: 'S',
        mapping_id: 4,
        names: ['Shia', 'Sunni']
      }];
      this.Caste = true;
      this.Sects = ['Shia', 'Sunni'];
      this.S = true;
      this.AllCastes = false;
      this.HoroScopes = false;
      this.Mangaliks = false;
    } else if (event.currentTarget.value === 'Sikh') {
      this.Castes = [{
          group: 'A',
          mapping_id: 4,
          names: ['Arora']
        },
        {
          group: 'B',
          mapping_id: 4,
          names: ['Bhatia']
        },
        {
          group: 'G',
          mapping_id: 4,
          names: ['Gurkish']
        },
        {
          group: 'j',
          mapping_id: 4,
          names: ['jat']
        },
        {
          group: 'l',
          mapping_id: 4,
          names: ['Labana']
        },
        {
          group: 'M',
          mapping_id: 4,
          names: ['Mazbhi']
        },
        {
          group: 'O',
          mapping_id: 4,
          names: ['Others']
        },
        {
          group: 'R',
          mapping_id: 4,
          names: ['Rajput', 'Rmadasia', 'Ramagharia']
        },
        {
          group: 'S',
          mapping_id: 4,
          names: ['Saini']
        },
      ];
      this.Caste = true;
      this.S = false;
      this.AllCastes = true;
      this.HoroScopes = true;
      this.Mangaliks = true;
    } else if (event.currentTarget.value === 'Christian') {
      this.Caste = false;
      this.Sects = ['AngloIndia', 'BornIndian'];
      this.S = true;
      this.AllCastes = false;
      this.HoroScopes = false;
      this.Mangaliks = false;
    } else if (event.currentTarget.value === 'Buddhist') {
      this.Caste = false;
      this.S = false;
      this.AllCastes = false;
      this.HoroScopes = true;
      this.Mangalika = ['Manglik', 'Non-manglik', 'Anshik manglik'];
      this.HoroScope = ['Must', 'Not Necessary'];
      this.Mangaliks = true;
    } else if (event.currentTarget.value === 'Jain') {
      this.Castes = [{
          group: 'D',
          mapping_id: 4,
          names: ['Digamber']
        },
        {
          group: 'O',
          mapping_id: 4,
          names: ['Others']
        },
        {
          group: 'S',
          mapping_id: 4,
          names: ['Shwetamber']
        },
      ];
      this.Mangalika = ['Manglik', 'Non-manglik', 'Anshik manglik'];
      this.HoroScope = ['Must', 'Not Necessary'];
      this.Caste = true;
      this.S = false;
      this.AllCastes = true;
      this.HoroScopes = true;
      this.Mangaliks = true;
    } else if (event.currentTarget.value === 'Parsi') {
      this.Caste = false;
      this.S = false;
      this.AllCastes = false;
      this.HoroScopes = false;
      this.Mangaliks = false;
    } else if (event.currentTarget.value === 'Jewish') {
      this.Caste = false;
      this.S = false;
      this.AllCastes = false;
      this.HoroScopes = false;
      this.Mangaliks = false;
    } else if (event.currentTarget.value === 'Bahai') {
      this.Caste = false;
      this.S = false;
      this.AllCastes = false;
      this.HoroScopes = false;
      this.Mangaliks = false;
    }
  }

  ngOnInit() {
    
  }



}
