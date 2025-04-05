package com.dommy.shopping.api.user.exception;


import com.dommy.shopping.api.user.model.Error;
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
