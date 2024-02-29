use axum::{http::StatusCode, response::IntoResponse};
use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct UserBody<T> {
    pub user: T,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct Login {
	pub email: String,
	pub password: String
}

#[derive(Serialize, Deserialize, Debug)]
pub struct SignUp {

}

#[derive(Serialize, Deserialize, Debug)]
pub struct DeleteUser {

}

#[derive(Serialize, Deserialize, Debug)]
pub struct ModifyUser {

}

#[derive(Debug)]
pub enum CErrors {
	DBFailure
} 

impl IntoResponse for CErrors {
	fn into_response(self) -> axum::response::Response {
			let body = match self {
				CErrors::DBFailure => "Something went wrong in database"
			};
			(StatusCode::INTERNAL_SERVER_ERROR, body).into_response()
	}
}