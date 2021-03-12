package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	server := gin.Default()

	server.POST("/user/login", func(c *gin.Context) {
		user := c.Request.FormValue("user")
		password := c.Request.FormValue("password")
		c.JSON(200, gin.H{
			"user":     user,
			"password": password,
		})
	})

	server.POST("/user/register", func(c *gin.Context) {
		user := c.Request.FormValue("user")
		password := c.Request.FormValue("password")
		c.JSON(200, gin.H{
			"user":     user,
			"password": password,
		})
	})

	server.Run(":8000")
}
