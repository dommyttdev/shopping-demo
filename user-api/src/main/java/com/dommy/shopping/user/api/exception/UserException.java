package com.dommy.shopping.user.api.exception;


import com.dommy.shopping.user.api.model.Error;
import lombok.Getter;

@Getter
public class UserException extends RuntimeException {
    public final int code;

    public UserException(int code, String message) {
        super(message);
        this.code = code;
    }

    public Error toError() {
        return new Error(code, getMessage());
    }
}
