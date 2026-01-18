# Docker Development Setup

This Docker Compose setup provides a complete development environment for the Laravel + React & Inertia project.

## Services

- **PHP 8.4** (Note: PHP 8.5.2 doesn't exist yet, using 8.4 which is the latest stable)
  - Includes **Composer** and **Bun 1.3.6** (for Vite and frontend dependencies)
  - Runs both PHP-FPM and Vite dev server via Supervisor
- **Nginx** (web server)
- **Supervisor** (separate container managing Laravel queue worker and Reverb)
- **PostgreSQL 18.1** (database)
- **Redis 8.4** (cache and sessions)

## Hot Reloading

Both Laravel and Vite support hot reloading through volume mounts:
- All application code is mounted as volumes, so changes are immediately reflected
- Vite HMR is configured to work through Nginx proxy
- Laravel's file watching works automatically with mounted volumes

## Initial Setup

1. Copy `.env.example` to `.env` if you haven't already:
   ```bash
   cp .env.example .env
   ```

2. Update your `.env` file with these database settings:
   ```
   DB_CONNECTION=pgsql
   DB_HOST=postgres
   DB_PORT=5432
   DB_DATABASE=chirp
   DB_USERNAME=chirp
   DB_PASSWORD=password
   
   REDIS_HOST=redis
   REDIS_PORT=6379
   CACHE_DRIVER=redis
   SESSION_DRIVER=redis
   QUEUE_CONNECTION=redis
   ```

3. Build and start the containers:
   ```bash
   docker-compose up -d --build
   ```

4. Install PHP dependencies:
   ```bash
   docker-compose exec php composer install
   ```

5. Install Node dependencies:
   ```bash
   docker-compose exec php bun install
   ```

6. Generate application key:
   ```bash
   docker-compose exec php php artisan key:generate
   ```

7. Run migrations:
   ```bash
   docker-compose exec php php artisan migrate
   ```

## Usage

- **Application**: http://localhost
- **Vite Dev Server**: http://localhost:5173 (proxied through Nginx)
- **PostgreSQL**: localhost:5432
- **Redis**: localhost:6379

## Useful Commands

```bash
# View logs
docker-compose logs -f

# Execute Artisan commands
docker-compose exec php php artisan [command]

# Execute Composer commands
docker-compose exec php composer [command]

# Execute Bun commands
docker-compose exec php bun [command]

# Access PHP container shell
docker-compose exec php bash

# Stop all containers
docker-compose down

# Stop and remove volumes (clean slate)
docker-compose down -v
```

## Supervisor Services

Supervisor automatically manages:
- **Laravel Queue Worker**: Processes queued jobs from Redis (auto-starts)
- **Laravel Reverb**: WebSocket server for real-time features (runs on port 8080, proxied through Nginx)
  - Note: Reverb is disabled by default. To enable:
    1. Install Reverb: `docker-compose exec php composer require laravel/reverb`
    2. Publish config: `docker-compose exec php php artisan reverb:install`
    3. Update `docker/supervisor/supervisord.conf` and set `autostart=true` for the reverb program
    4. Restart supervisor: `docker-compose restart supervisor`

## Notes

- PHP 8.5.2 doesn't exist yet. The setup uses PHP 8.4 (latest stable). If you need 8.5.2 specifically, you'll need to build a custom Docker image.
- PHP and Bun services are merged into a single container since Laravel Wayfinder requires PHP/Artisan during Vite startup
- Storage and cache directories are automatically created with proper permissions
- All volumes are mounted for hot reloading - changes to code are immediately reflected
- The PHP container runs both PHP-FPM and Bun/Vite via Supervisor for process management
