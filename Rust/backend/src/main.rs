use axum::{
    body::Body,
    extract::State,
    http::StatusCode,
    middleware,
    response::{Html, IntoResponse, Response},
    routing::{get, post},
    Json, Router,
};
use dotenv::dotenv;
// use serde_json::{json, Value};
use core::fmt::Error;
use sqlx::{mysql::{MySqlPoolOptions, MySqlRow}, query, MySqlPool};
use std::env;
mod structs;
use structs::*;


#[derive(Clone, Debug)]
pub struct AppState {
	pool: MySqlPool,
}

#[tokio::main]
async fn main() -> Result<(), Error> {
    // Database stuff
    dotenv().ok();
	let database_url = env::var("DATABASE_URL").expect("DATABASE_URL not set");
		let pool = MySqlPoolOptions::new()
		.max_connections(5)
		.connect(&database_url)
		.await
				.unwrap();
	let state = AppState { pool };
	let app = Router::new()
		.route("/", get(index))
		.route(".login", post(login))
		.layer(middleware::map_response(main_response_mapper))
		.with_state(state);
	let listener = tokio::net::TcpListener::bind("localhost:8080")
		.await
		.unwrap();
	println!("listening on http://{}", listener.local_addr().unwrap());
    axum::serve(listener, app).await.unwrap();
    Ok(())
}

async fn main_response_mapper(res: Response) -> Response {
    println!("{:<12} - main_response_mapper", "RES_MAPPER");
    println!("{res:?}");
    res
}

async fn index() -> Html<&'static str> {
    println!("{:<12} - main_Site", "HANDLER");
    Html("<p>Pirate</p>")
}

async fn login(
	State(pool): State<AppState>,
	Json(params): Json<Login>
) -> Result<(), Response<Body>> {
	let result = query("
		SELECT email,password
		FROM Users
		WHERE password = ?;
		")
		.bind(&params.password)
		.fetch_all(&pool.pool)
		.await;
	match result {
		Ok(_) => Ok(()),
		Err(_) => Err(Response::builder().status(StatusCode::UNAUTHORIZED).body(Body::empty()).unwrap())
	}
}
