php *COMMAND:
    docker compose exec php php artisan {{COMMAND}}
artisan *COMMAND:
    docker compose exec php php artisan {{COMMAND}}
composer *COMMAND:
    docker compose exec php composer {{COMMAND}}
bun *COMMAND:
    docker compose exec php bun {{COMMAND}}
bunx *COMMAND:
    docker compose exec php bun x {{COMMAND}}
dev:
    docker compose exec php bun dev --host=0.0.0.0
up:
    docker compose up -d
down:
    docker compose down
