# Freelancer User Journey Map

```mermaid
journey
    title Freelancer Journey on Klio Creative
    section Initial Access
        Visit Homepage: 5: User
        Click Sign Up: 4: User
        Complete Auth0 Login: 3: User, System
        Email Verification: 3: User, System

    section Profile Setup
        Choose Freelancer Role: 5: User
        Basic Information: 4: User
        Upload Profile Picture: 3: User
        Select Skills: 4: User, System
        Set Up Portfolio: 4: User
        Calendar Integration: 3: User, System
        Complete Profile: 5: User, System

    section Dashboard Onboarding
        First Dashboard View: 4: User
        Tour Key Features: 3: System
        Set Availability: 4: User
        Complete Payment Setup: 3: User
```

## Detailed User States & Interactions

### 1. Registration & Authentication
```mermaid
stateDiagram-v2
    [*] --> Homepage
    Homepage --> SignUp
    SignUp --> Auth0Login
    Auth0Login --> EmailVerification
    EmailVerification --> ProfileType
    ProfileType --> FreelancerSetup
```

### 2. Profile Setup Experience
```mermaid
stateDiagram-v2
    [*] --> BasicInfo
    BasicInfo --> SkillSelection
    SkillSelection --> PortfolioSetup
    PortfolioSetup --> CalendarSetup
    CalendarSetup --> PaymentSetup
    PaymentSetup --> Dashboard

    state SkillSelection {
        [*] --> BrowseSkills
        BrowseSkills --> SelectSkills
        SelectSkills --> RankSkills
        RankSkills --> [*]
    }

    state PortfolioSetup {
        [*] --> CreateFirst
        CreateFirst --> AddMore
        AddMore --> ArrangeLayout
        ArrangeLayout --> [*]
    }
```

### 3. Dashboard Interactions
```mermaid
stateDiagram-v2
    [*] --> DashboardHome
    
    DashboardHome --> Portfolio: Manage Portfolio
    DashboardHome --> Skills: Update Skills
    DashboardHome --> Calendar: Set Availability
    DashboardHome --> Settings: Account Settings

    state Portfolio {
        [*] --> ViewPortfolio
        ViewPortfolio --> EditItem
        ViewPortfolio --> AddItem
        ViewPortfolio --> DeleteItem
        EditItem --> SaveChanges
        AddItem --> SaveChanges
        SaveChanges --> [*]
    }

    state Calendar {
        [*] --> ViewCalendar
        ViewCalendar --> SetAvailability
        ViewCalendar --> ConnectCalendly
        ViewCalendar --> ConnectGoogle
        SetAvailability --> [*]
    }
```

## Key User Touchpoints & States

### Homepage to Registration
1. **Initial Landing**
   - View value proposition
   - Access sign-up button
   - View freelancer benefits

2. **Registration Flow**
   - Choose registration method
   - Complete Auth0 form
   - Verify email
   - Select user type

### Profile Creation
1. **Basic Information**
   - Personal details
   - Professional summary
   - Location settings
   - Profile picture upload

2. **Skills Configuration**
   - Browse skill categories
   - Select relevant skills
   - Rank proficiency
   - Add custom skills

3. **Portfolio Setup**
   - Create first item
   - Add project details
   - Upload media
   - Arrange layout

4. **Calendar Integration**
   - Choose calendar provider
   - Set availability
   - Configure preferences
   - Sync settings

### Dashboard Experience
1. **First-time Login**
   - Welcome tour
   - Feature highlights
   - Quick setup guides
   - Next steps

2. **Regular Usage**
   - Portfolio management
   - Skills updates
   - Availability changes
   - Profile optimization

## Error States & Recovery Flows

### Common Error Scenarios
1. **Authentication Issues**
   - Invalid credentials
   - Email verification failed
   - Session timeout
   - 2FA problems

2. **Profile Setup Issues**
   - Missing required fields
   - Upload failures
   - Integration errors
   - Validation problems

3. **Dashboard Operations**
   - Save failures
   - Update errors
   - Connection issues
   - Sync problems

### Recovery Paths
1. **Authentication Recovery**
   - Password reset
   - Email reverification
   - Support contact
   - Account recovery

2. **Data Entry Recovery**
   - Auto-save drafts
   - Validation guidance
   - Error messaging
   - Help resources

3. **Technical Recovery**
   - Retry options
   - Alternative paths
   - Support access
   - Status updates
