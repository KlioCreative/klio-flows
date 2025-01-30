# Agency/Business Technical Flow

```mermaid
graph TD
    %% Authentication Flow
    Start[User Visits Site] --> Auth{Authenticated?}
    Auth -->|No| Login[Auth0 Login]
    Login --> Callback[Auth0 Callback]
    Callback --> CheckProfile{Profile Complete?}
    
    %% Profile Setup Flow
    CheckProfile -->|No| ProfileSetup[Company Profile Setup]
    ProfileSetup --> CompanyInfo[Company Information]
    CompanyInfo --> Industry[Industry Selection]
    Industry --> Payment[Payment Setup]
    Payment --> Complete[Profile Completion]
    
    %% Main Dashboard Flow
    CheckProfile -->|Yes| Dashboard[Agency Dashboard]
    Dashboard --> |View/Edit| Profile[Company Profile]
    Dashboard --> |Search| TalentSearch[Talent Search]
    Dashboard --> |Manage| Projects[Project Management]
    Dashboard --> |View| Favorites[Saved Freelancers]
    
    %% Talent Search Flow
    TalentSearch --> FilterSkills[Filter by Skills]
    TalentSearch --> FilterAvailability[Filter by Availability]
    TalentSearch --> FilterLocation[Filter by Location]
    TalentSearch --> ViewProfiles[View Freelancer Profiles]
    ViewProfiles --> SaveFavorite[Save to Favorites]
    ViewProfiles --> Contact[Contact Freelancer]
    
    %% Project Management
    Projects --> CreateProject[Create Project]
    Projects --> ManageProject[Manage Project]
    Projects --> ProjectInquiries[Project Inquiries]
    
    %% Settings and Configuration
    Dashboard --> Settings[Account Settings]
    Settings --> Subscription[Subscription Management]
    Settings --> Security[Security Settings]
    Settings --> Notifications[Notification Preferences]

    %% API Endpoints
    subgraph Backend API
        CompanyAPI[/api/company-profile/]
        SearchAPI[/api/freelancers/]
        ProjectAPI[/api/projects/]
        InquiryAPI[/api/project-inquiries/]
        PaymentAPI[/api/subscription-plans/]
    end

    %% Connect Components to API
    Profile --> CompanyAPI
    TalentSearch --> SearchAPI
    Projects --> ProjectAPI
    ProjectInquiries --> InquiryAPI
    Subscription --> PaymentAPI
```

## API Endpoints Detail

### Company Profile Management
- `GET /api/company-profile/` - Retrieve profile
- `POST /api/company-profile/` - Create profile
- `PUT /api/company-profile/<id>/` - Update profile
- `PATCH /api/company-profile/<id>/` - Partial update

### Talent Search
- `GET /api/freelancers/` - Search freelancers
- `GET /api/favorites/freelancers/` - List favorite freelancers
- `POST /api/favorites/create/` - Add to favorites
- `DELETE /api/favorites/<id>/delete/` - Remove from favorites

### Project Management
- `GET /api/projects/` - List projects
- `POST /api/projects/` - Create project
- `PUT /api/projects/<id>/` - Update project
- `DELETE /api/projects/<id>/` - Delete project
- `GET /api/project-inquiries/` - List inquiries
- `POST /api/submit-inquiry/` - Submit inquiry

### Subscription Management
- `GET /api/subscription-plans/` - List plans
- `POST /api/create-subscription/` - Create subscription
- `PUT /api/update-payment-method/` - Update payment
- `POST /api/cancel-subscription/` - Cancel subscription

## Component Hierarchy

```mermaid
graph TD
    App --> Layout
    Layout --> AgencyDashboard
    AgencyDashboard --> DashboardLayout
    DashboardLayout --> TalentSearch
    DashboardLayout --> ProjectManager
    DashboardLayout --> AccountSettings
    
    TalentSearch --> SearchFilters
    TalentSearch --> FreelancerGrid
    TalentSearch --> FavoritesList
    
    ProjectManager --> ProjectList
    ProjectManager --> ProjectDetails
    ProjectManager --> InquiryManager
    
    AccountSettings --> SubscriptionManager
    AccountSettings --> SecuritySettings
    AccountSettings --> NotificationSettings
    
    FreelancerGrid --> FreelancerCard
    FreelancerCard --> ProfileView
    FreelancerCard --> ContactModal
    
    ProjectList --> ProjectCard
    ProjectDetails --> InquiryForm
```

## State Management Flow

```mermaid
stateDiagram-v2
    [*] --> Dashboard
    
    Dashboard --> TalentSearch
    Dashboard --> ProjectManagement
    Dashboard --> Settings
    
    state TalentSearch {
        [*] --> SearchForm
        SearchForm --> Results
        Results --> FreelancerProfile
        FreelancerProfile --> Contact
        FreelancerProfile --> AddFavorite
    }
    
    state ProjectManagement {
        [*] --> ProjectList
        ProjectList --> CreateProject
        ProjectList --> ViewProject
        ViewProject --> ManageInquiries
        ViewProject --> EditProject
    }
    
    state Settings {
        [*] --> Profile
        Profile --> Subscription
        Profile --> Security
        Profile --> Notifications
    }
