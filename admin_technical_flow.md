# Admin Technical Flow

```mermaid
graph TD
    %% Authentication Flow
    Start[User Visits Site] --> Auth{Authenticated?}
    Auth -->|No| Login[Auth0 Login]
    Login --> Callback[Auth0 Callback]
    Callback --> CheckRole{Admin Role?}
    
    %% Admin Dashboard Access
    CheckRole -->|Yes| Dashboard[Admin Dashboard]
    CheckRole -->|No| Unauthorized[Access Denied]
    
    %% Main Admin Functions
    Dashboard --> |View| Stats[Platform Statistics]
    Dashboard --> |Manage| Users[User Management]
    Dashboard --> |Manage| Skills[Skill Management]
    Dashboard --> |Monitor| System[System Status]
    Dashboard --> |View| Announcements[Announcement Management]
    
    %% User Management Flow
    Users --> ViewUsers[View All Users]
    Users --> DeleteUser[Delete User]
    Users --> RestoreUser[Restore User]
    Users --> UserDetails[View User Details]
    
    %% Skill Management
    Skills --> ViewSkills[View Skills]
    Skills --> ApproveSkill[Approve Skill]
    Skills --> AddSkill[Add New Skill]
    Skills --> CategoryMgmt[Manage Categories]
    
    %% Announcement Management
    Announcements --> CreateAnnouncement[Create Announcement]
    Announcements --> DeleteAnnouncement[Delete Announcement]
    Announcements --> ViewActive[View Active Announcements]
    
    %% System Monitoring
    System --> ViewMetrics[View Metrics]
    System --> CheckStatus[Check System Status]
    System --> ViewLogs[Access Logs]

    %% API Endpoints
    subgraph Backend API
        StatsAPI[/api/admin/stats/]
        UserAPI[/api/users/]
        SkillAPI[/api/skills/]
        AnnouncementAPI[/api/announcements/]
    end

    %% Connect Components to API
    Stats --> StatsAPI
    Users --> UserAPI
    Skills --> SkillAPI
    Announcements --> AnnouncementAPI
```

## API Endpoints Detail

### Admin Statistics
- `GET /api/admin/stats/` - Get platform statistics
- `GET /api/admin/stats/users` - Get user statistics
- `GET /api/admin/stats/skills` - Get skill statistics
- `GET /api/admin/stats/projects` - Get project statistics

### User Management
- `GET /api/users/` - List all users
- `DELETE /api/delete-user/<email>/` - Delete user
- `POST /api/restore-user/<email>/` - Restore user
- `GET /api/users/<id>/` - Get user details

### Skill Management
- `GET /api/skills/` - List all skills
- `POST /api/skills/` - Create new skill
- `PUT /api/skills/<id>/` - Update skill
- `POST /api/skills/approve/<id>/` - Approve skill
- `DELETE /api/skills/<id>/` - Delete skill

### Announcement Management
- `GET /api/announcements/` - List announcements
- `POST /api/announcements/create/` - Create announcement
- `DELETE /api/announcements/<id>/` - Delete announcement
- `GET /api/announcements/active/` - Get active announcements

## Component Hierarchy

```mermaid
graph TD
    App --> Layout
    Layout --> AdminDashboard
    AdminDashboard --> StatsPanel
    AdminDashboard --> UserManager
    AdminDashboard --> SkillManager
    AdminDashboard --> AnnouncementManager
    
    StatsPanel --> StatCards
    StatsPanel --> StatCharts
    
    UserManager --> UserList
    UserManager --> UserActions
    UserManager --> UserDetails
    
    SkillManager --> SkillList
    SkillManager --> SkillApproval
    SkillManager --> CategoryManager
    
    AnnouncementManager --> AnnouncementList
    AnnouncementManager --> AnnouncementForm
```

## State Management Flow

```mermaid
stateDiagram-v2
    [*] --> Dashboard
    
    Dashboard --> UserManagement
    Dashboard --> SkillManagement
    Dashboard --> AnnouncementManagement
    Dashboard --> Statistics
    
    state UserManagement {
        [*] --> UserList
        UserList --> UserDetails
        UserDetails --> DeleteUser
        UserDetails --> RestoreUser
    }
    
    state SkillManagement {
        [*] --> SkillList
        SkillList --> ApproveSkill
        SkillList --> EditSkill
        SkillList --> AddNewSkill
    }
    
    state AnnouncementManagement {
        [*] --> ViewAnnouncements
        ViewAnnouncements --> CreateNew
        ViewAnnouncements --> EditExisting
        ViewAnnouncements --> DeleteAnnouncement
    }
    
    state Statistics {
        [*] --> Overview
        Overview --> UserStats
        Overview --> SkillStats
        Overview --> ProjectStats
    }
```

## Admin Access Control

```mermaid
graph TD
    Login[Admin Login] --> TokenCheck{Valid Token?}
    TokenCheck -->|Yes| RoleCheck{Admin Role?}
    TokenCheck -->|No| Redirect[Redirect to Login]
    
    RoleCheck -->|Yes| AdminAccess[Grant Admin Access]
    RoleCheck -->|No| Unauthorized[Access Denied]
    
    AdminAccess --> CheckPermissions{Check Permissions}
    CheckPermissions -->|Full Access| AllFeatures[All Admin Features]
    CheckPermissions -->|Limited Access| LimitedFeatures[Limited Features]
