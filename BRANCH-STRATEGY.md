# Branch Strategy

## Branches

| Branch      | Purpose                                             | Protection Rules                      |
| ----------- | --------------------------------------------------- | ------------------------------------- |
| `main`      | Production-ready code                               | Require PR + review, no direct pushes |
| `dev`       | Integration branch for development                  | Require PR, no direct pushes          |
| `feature/*` | New features (e.g. `feature/hero-section`)          | Delete after merge                    |
| `bugfix/*`  | Bug fixes for dev (e.g. `bugfix/nav-scroll`)        | Delete after merge                    |
| `hotfix/*`  | Urgent production fixes (e.g. `hotfix/typo-footer`) | Merge to `main` + `dev`, delete after |
| `release/*` | Release preparation (e.g. `release/v1.0.0`)         | Merge to `main` + `dev`, tag on main  |

## Workflow

1. **Start work**: Branch from `dev` → `feature/<name>` or `bugfix/<name>`
2. **Complete work**: Open PR targeting `dev` → review → merge
3. **Release**: Branch from `dev` → `release/<version>` → QA → merge to `main` + `dev` → tag
4. **Hotfix**: Branch from `main` → `hotfix/<name>` → fix → merge to `main` + `dev`

## Naming Conventions

- `feature/<short-description>` — e.g. `feature/faq-accordion`, `feature/contact-form`
- `bugfix/<short-description>` — e.g. `bugfix/mobile-menu`, `bugfix/lazy-images`
- `hotfix/<short-description>` — e.g. `hotfix/broken-link`, `hotfix/css-overflow`
- `release/<version>` — e.g. `release/v1.0.0`, `release/v1.1.0`

## Commit Conventions

Use conventional commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`
