# Freelancer Technical Flow

```mermaid
graph TD
    %% Authentication Flow
    Start[User Visits Site] --> Auth{Authenticated?}
    Auth -->|No| Login[Auth0 Login]
    Login --> Callback[Auth0 Callback]
    Callback --> CheckProfile{Profile Complete?}
    
    %% Profile Setup Flow
    CheckProfile -->|No| ProfileSetup[Freelancer Profile Setup]
    ProfileSetup --> Skills[Skill Selection]
    Skills --> Portfolio[Portfolio Setup]
    Portfolio --> Calendar[Calendar Integration]
    Calendar --> Complete[Profile Completion]
    
    %% Main Dashboard Flow
    CheckProfile -->|Yes| Dashboard[Freelancer Dashboard]
    Dashboard --> |View/Edit| Profile[Profile Management]
    Dashboard --> |Manage| PortfolioMgmt[Portfolio Management]
    Dashboard --> |Update| SkillsMgmt[Skills Management]
    Dashboard --> |Set| Availability[Availability Management]
    
    %% Portfolio Management
    PortfolioMgmt --> AddItem[Add Portfolio Item]
    PortfolioMgmt --> EditItem[Edit Portfolio Item]
    PortfolioMgmt --> DeleteItem[Delete Portfolio Item]
    PortfolioMgmt --> UpdateLayout[Update Layout]
    
    %% Skills Management
    SkillsMgmt --> AddSkill[Add Skill]
    SkillsMgmt --> RemoveSkill[Remove Skill]
    SkillsMgmt --> RankSkill[Rank Skills]
    
    %% Availability Management
    Availability --> CalendlyInt[Calendly Integration]
    Availability --> GoogleCal[Google Calendar]
    
    %% Settings and Configuration
    Dashboard --> Settings[Account Settings]
    Settings --> Payment[Payment Setup]
    Settings --> Security[Security Settings]
    Settings --> Notifications[Notification Preferences]

    %% API Endpoints
    subgraph Backend API
        ProfileAPI[/api/freelancer-profile/]
        SkillsAPI[/api/user/manage-skills/]
        PortfolioAPI[/api/portfolio/]
        CalendarAPI[/api/google-calendar/]
        PaymentAPI[/api/payment-details/]
    end

    %% Connect Components to API
    Profile --> ProfileAPI
    SkillsMgmt --> SkillsAPI
    PortfolioMgmt --> PortfolioAPI
    Availability --> CalendarAPI
    Payment --> PaymentAPI
```

## API Endpoints Detail

### Profile Management
- `GET /api/freelancer-profile/` - Retrieve profile
- `POST /api/freelancer-profile/` - Create profile
- `PUT /api/freelancer-profile/<id>/` - Update profile
- `PATCH /api/freelancer-profile/<id>/` - Partial update

### Skills Management
- `GET /api/user/manage-skills/` - List skills
- `POST /api/user/manage-skills/` - Add skill
- `DELETE /api/user/manage-skills/<id>/` - Remove skill
- `PATCH /api/user_skills/update_rank/` - Update skill ranking

### Portfolio Management
- `GET /api/portfolio/` - Get portfolio items
- `POST /api/portfolio/` - Create portfolio item
- `PUT /api/portfolio/<id>/` - Update item
- `DELETE /api/portfolio/<id>/` - Delete item
- `PATCH /api/portfolio-layout/` - Update layout

### Calendar Integration
- `GET /api/google-calendar/events/` - List events
- `POST /api/google-calendar/availability-event/` - Create availability
- `DELETE /api/google-calendar/availability-event/<id>/` - Remove availability

### Payment Setup
- `GET /api/payment-details/` - Get payment info
- `POST /api/setup-payment-method/` - Setup payment
- `PUT /api/update-payment-method/` - Update payment

## Component Hierarchy

```mermaid
graph TD
    App --> Layout
    Layout --> FreelancerDashboard
    FreelancerDashboard --> DashboardLayout
    DashboardLayout --> Portfolio
    DashboardLayout --> SkillsManager
    DashboardLayout --> AvailabilityCalendar
    DashboardLayout --> AccountSettings
    
    Portfolio --> PortfolioItem
    Portfolio --> PortfolioGrid
    
    SkillsManager --> SkillsList
    SkillsManager --> SkillsRanking
    
    AccountSettings --> PaymentDetails
    AccountSettings --> SecuritySettings
    AccountSettings --> NotificationSettings
