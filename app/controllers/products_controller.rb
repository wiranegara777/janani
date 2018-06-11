class ProductsController < ApplicationController
  def new
    @product = Product.new
  end

  def index
    @products = Product.all

    @product = Product.new
  end

  def create
    #render plain: params[:product].inspect
    @product = Product.new(product_params) #get product param from form

    respond_to do |format|
      if @product.save
        format.json { head :no_content }
        format.js
      else
        return render 'new' if @product.errors.present?
        #format.html { render action: "new" }
        #format.json { render json: @article.errors.full_messages,status: :unprocessable_entity }
      end
    end

    # if @product.save
    #   redirect_to @product
    # else
    #   render 'new'
    # end

  end

  def update
    @product = Product.find(params[:id])
    respond_to do |format|
      if @product.update(product_params)
        format.json { head :no_content }
        format.js
      else
        return render 'edit' if @product.errors.present?
        #format.html { render action: "new" }
        #format.json { render json: @article.errors.full_messages,status: :unprocessable_entity }
      end
    end
    # if @product.update(product_params)
    #   redirect_to @product
    # else
    #   render 'edit'
    # end
  end

  def product_params
    params.require(:product).permit(:name,:description,:jira,:gitlab,:status) #strong parameter
  end

  def show
    @product = Product.find(params[:id])
  end

  def edit
    @product = Product.find(params[:id])
  end

  def destroy
    @product = Product.find(params[:id])
    @product.destroy

    redirect_to products_path
  end

end
