export const languages = {
  en: 'English',
  ar: 'العربية'
} as const;

export type Language = keyof typeof languages;

export const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    howItWorks: 'How It Works',
    team: 'Team',
    tasks: 'Tasks',
    tokenomics: 'Tokenomics',
    signIn: 'Sign In',
    joinHexora: 'Join Hexora',
    
    // Common
    loading: 'Loading...',
    save: 'Save',
    cancel: 'Cancel',
    edit: 'Edit',
    delete: 'Delete',
    view: 'View',
    
    // Hero Section
    heroTitle: 'Build. Contribute. Earn.',
    heroSubtitle: 'Transform your code into real-world impact through Hexora\'s tokenized collaboration engine.',
    web3FutureHere: 'Web3 Future is Here',
    watchDemo: 'Watch Demo',
    
    // Stats
    activeContributors: 'Active Contributors',
    xpEarned: 'XP Earned',
    projectsCompleted: 'Projects Completed',
    
    // Features
    powerfulFeatures: 'Powerful',
    features: 'Features',
    featuresSubtitle: 'Everything you need to contribute, collaborate, and earn in the Web3 ecosystem.',
    xpSystem: 'XP System',
    xpSystemDesc: 'Earn experience points based on Effort × Impact × Peer Evaluation formula.',
    smartTaskMatching: 'Smart Task Matching',
    smartTaskMatchingDesc: 'AI-powered system matches you with tasks that align with your skills.',
    aiCodeReview: 'AI Code Review',
    aiCodeReviewDesc: 'Get instant feedback on your code quality and best practices.',
    daoGovernance: 'DAO Governance',
    daoGovernanceDesc: 'Participate in decentralized decision-making for the platform.',
    peerCollaboration: 'Peer Collaboration',
    peerCollaborationDesc: 'Work with talented developers worldwide and build connections.',
    tokenRewards: 'Token Rewards',
    tokenRewardsDesc: 'Convert your XP into real value with tradeable tokens.',
    secureTransparent: 'Secure & Transparent',
    secureTransparentDesc: 'Built on blockchain technology ensuring transparency and security.',
    versionControl: 'Version Control Integration',
    versionControlDesc: 'Seamlessly integrate with Git workflows and track contributions.',
    
    // Dashboard
    totalXP: 'Total XP',
    activeTasks: 'Active Tasks',
    teamMembers: 'Team Members',
    
    // Tasks
    todo: 'To Do',
    inProgress: 'In Progress',
    review: 'Review',
    done: 'Done',
    
    // Profile
    profile: 'Profile',
    settings: 'Settings',
    logout: 'Logout',
    
    // Guest Mode
    tryAsGuest: 'Try as Guest',
    guestMode: 'Guest Mode',
    exitGuestMode: 'Exit Guest Mode',
    guestModeDescription: 'Explore the platform with sample data',
    
    // Auth Forms
    welcomeBack: 'Welcome Back',
    signinSubtitle: 'Sign in to your Hexora account',
    joinSubtitle: 'Start your journey in Web3 collaboration',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    fullName: 'Full Name',
    emailPlaceholder: 'Enter your email',
    passwordPlaceholder: 'Enter your password',
    confirmPasswordPlaceholder: 'Confirm your password',
    namePlaceholder: 'Enter your full name',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password?',
    signingIn: 'Signing in...',
    creatingAccount: 'Creating account...',
    createAccount: 'Create Account',
    orContinueWith: 'or continue with',
    noAccount: 'Don\'t have an account?',
    alreadyHaveAccount: 'Already have an account?',
    signUp: 'Sign up',
    agreeToTerms: 'I agree to the',
    termsOfService: 'Terms of Service',
    and: 'and',
    privacyPolicy: 'Privacy Policy',
    
    // Validation
    emailRequired: 'Email is required',
    emailInvalid: 'Please enter a valid email',
    passwordRequired: 'Password is required',
    passwordTooShort: 'Password must be at least 8 characters',
    nameRequired: 'Name is required',
    passwordMismatch: 'Passwords do not match',
    termsRequired: 'You must agree to the terms',
    signinError: 'Invalid email or password',
    signupError: 'Failed to create account. Please try again.',
    
    // Footer
    footerDescription: 'Transform your code into real-world impact through Hexora\'s tokenized collaboration engine.',
    product: 'Product',
    community: 'Community',
    legal: 'Legal',
    company: 'Company',
    discord: 'Discord',
    github: 'GitHub',
    twitter: 'Twitter',
    blog: 'Blog',
    cookiePolicy: 'Cookie Policy',
    careers: 'Careers',
    contact: 'Contact',
    copyright: '© 2025 Hexora. All rights reserved.',
    builtWithLove: 'Built with ❤️ for the Web3 community',
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    about: 'حول',
    projects: 'المشاريع',
    howItWorks: 'كيف يعمل',
    team: 'الفريق',
    tasks: 'المهام',
    tokenomics: 'اقتصاد الرموز',
    signIn: 'تسجيل الدخول',
    joinHexora: 'انضم إلى هيكسورا',
    
    // Common
    loading: 'جاري التحميل...',
    save: 'حفظ',
    cancel: 'إلغاء',
    edit: 'تعديل',
    delete: 'حذف',
    view: 'عرض',
    
    // Hero Section
    heroTitle: 'ابني. ساهم. اكسب.',
    heroSubtitle: 'حول كودك إلى تأثير حقيقي من خلال محرك التعاون المرمز في هيكسورا.',
    web3FutureHere: 'مستقبل الويب 3 هنا',
    watchDemo: 'شاهد العرض التوضيحي',
    
    // Stats
    activeContributors: 'المساهمون النشطون',
    xpEarned: 'نقاط الخبرة المكتسبة',
    projectsCompleted: 'المشاريع المكتملة',
    
    // Features
    powerfulFeatures: 'ميزات',
    features: 'قوية',
    featuresSubtitle: 'كل ما تحتاجه للمساهمة والتعاون والكسب في نظام الويب 3.',
    xpSystem: 'نظام نقاط الخبرة',
    xpSystemDesc: 'اكسب نقاط الخبرة بناءً على معادلة الجهد × التأثير × تقييم الأقران.',
    smartTaskMatching: 'مطابقة المهام الذكية',
    smartTaskMatchingDesc: 'نظام مدعوم بالذكاء الاصطناعي يطابقك مع المهام التي تتماشى مع مهاراتك.',
    aiCodeReview: 'مراجعة الكود بالذكاء الاصطناعي',
    aiCodeReviewDesc: 'احصل على ملاحظات فورية حول جودة الكود وأفضل الممارسات.',
    daoGovernance: 'حوكمة المنظمة اللامركزية',
    daoGovernanceDesc: 'شارك في صنع القرار اللامركزي للمنصة.',
    peerCollaboration: 'التعاون مع الأقران',
    peerCollaborationDesc: 'اعمل مع مطورين موهوبين حول العالم وابني الاتصالات.',
    tokenRewards: 'مكافآت الرموز',
    tokenRewardsDesc: 'حول نقاط الخبرة إلى قيمة حقيقية مع الرموز القابلة للتداول.',
    secureTransparent: 'آمن وشفاف',
    secureTransparentDesc: 'مبني على تقنية البلوك تشين لضمان الشفافية والأمان.',
    versionControl: 'تكامل التحكم في الإصدار',
    versionControlDesc: 'تكامل سلس مع سير عمل Git وتتبع المساهمات.',
    
    // Dashboard
    totalXP: 'إجمالي نقاط الخبرة',
    activeTasks: 'المهام النشطة',
    teamMembers: 'أعضاء الفريق',
    
    // Tasks
    todo: 'للقيام',
    inProgress: 'قيد التنفيذ',
    review: 'مراجعة',
    done: 'مكتمل',
    
    // Profile
    profile: 'الملف الشخصي',
    settings: 'الإعدادات',
    logout: 'تسجيل الخروج',
    
    // Guest Mode
    tryAsGuest: 'جرب كضيف',
    guestMode: 'وضع الضيف',
    exitGuestMode: 'إنهاء وضع الضيف',
    guestModeDescription: 'استكشف المنصة ببيانات تجريبية',
    
    // Auth Forms
    welcomeBack: 'مرحباً بعودتك',
    signinSubtitle: 'سجل الدخول إلى حساب هيكسورا الخاص بك',
    joinSubtitle: 'ابدأ رحلتك في التعاون على الويب 3',
    email: 'البريد الإلكتروني',
    password: 'كلمة المرور',
    confirmPassword: 'تأكيد كلمة المرور',
    fullName: 'الاسم الكامل',
    emailPlaceholder: 'أدخل بريدك الإلكتروني',
    passwordPlaceholder: 'أدخل كلمة المرور',
    confirmPasswordPlaceholder: 'أكد كلمة المرور',
    namePlaceholder: 'أدخل اسمك الكامل',
    rememberMe: 'تذكرني',
    forgotPassword: 'نسيت كلمة المرور؟',
    signingIn: 'جاري تسجيل الدخول...',
    creatingAccount: 'جاري إنشاء الحساب...',
    createAccount: 'إنشاء حساب',
    orContinueWith: 'أو تابع مع',
    noAccount: 'ليس لديك حساب؟',
    alreadyHaveAccount: 'لديك حساب بالفعل؟',
    signUp: 'سجل',
    agreeToTerms: 'أوافق على',
    termsOfService: 'شروط الخدمة',
    and: 'و',
    privacyPolicy: 'سياسة الخصوصية',
    
    // Validation
    emailRequired: 'البريد الإلكتروني مطلوب',
    emailInvalid: 'يرجى إدخال بريد إلكتروني صحيح',
    passwordRequired: 'كلمة المرور مطلوبة',
    passwordTooShort: 'يجب أن تكون كلمة المرور 8 أحرف على الأقل',
    nameRequired: 'الاسم مطلوب',
    passwordMismatch: 'كلمات المرور غير متطابقة',
    termsRequired: 'يجب الموافقة على الشروط',
    signinError: 'بريد إلكتروني أو كلمة مرور غير صحيحة',
    signupError: 'فشل في إنشاء الحساب. يرجى المحاولة مرة أخرى.',
    
    // Footer
    footerDescription: 'حول كودك إلى تأثير حقيقي من خلال محرك التعاون المرمز في هيكسورا.',
    product: 'المنتج',
    community: 'المجتمع',
    legal: 'قانوني',
    company: 'الشركة',
    discord: 'ديسكورد',
    github: 'جيت هاب',
    twitter: 'تويتر',
    blog: 'المدونة',
    cookiePolicy: 'سياسة ملفات تعريف الارتباط',
    careers: 'الوظائف',
    contact: 'اتصل بنا',
    copyright: '© 2025 هيكسورا. جميع الحقوق محفوظة.',
    builtWithLove: 'مبني بـ ❤️ لمجتمع الويب 3',
  }
};

export function getTranslation(key: string, language: Language): string {
  const keys = key.split('.');
  let value: any = translations[language];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}